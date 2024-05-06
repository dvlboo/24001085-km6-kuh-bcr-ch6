import axios from "axios";
import { setCar, setCars } from "../reducers/cars";
import { toast } from "react-toastify";


export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth

  let data = ''
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BE_API}/api/cars`,
    headers: { 
      Authorization: `Bearer ${token}`
    },
    data : data
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data

    dispatch(setCars(data))
  }
  catch (error) {
    toast.error(error?.response?.data?.message)
  }
  
}

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BE_API}/api/cars/${id}`,
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };
  
  try {
    const response = await axios.request(config);
    const { data } = response.data

    dispatch(setCar(data))
  }
  catch (error) {
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
}

export const addCar = 
  (navigate, name, rent_per_day, sizes_id, photo, setLoading) => async (getState) => {
    // make loading
    setLoading(true)
    const { token } = getState().auth

    let data = new FormData();
    data.append('name', name);
    data.append('rent_per_day', rent_per_day);
    data.append('sizes_id', sizes_id);
    data.append('photo', photo);
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BE_API}/api/cars`,
      headers: { 
        Authorization: `Bearer ${token}`,
        ...data.getHeaders()
      },
      data : data
    };
    
    try {
      await axios.request(config);
      
      navigate('/')
    }
    catch (error) {
      toast.error(error?.response?.data?.message)
    }

    setLoading(false)
  }