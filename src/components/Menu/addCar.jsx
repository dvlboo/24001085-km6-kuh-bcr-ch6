import { Card, FileInput, FloatingLabel, Label, Select } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../../redux/actions/cars";

export default function AddCarComponent() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [ name, setName ] = useState("")
  const [ rent, setRent ] = useState()
  const [ photo, setPhoto ] = useState()
  const [ size, setSize ] = useState()
  const [isLoading, setLoading] = useState(false)
  

  const onSubmit = async (e) => {
    e.preventDefault()

    dispatch(
      addCar(navigate, name, rent, photo, size, setLoading)
    )
  }
  return (
    <div className="container">
      <Card>
        <div className="mx-auto">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Car
          </h2>
        </div>

        <div className="mt-3 mx-auto w-full max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit} >
            
            <div className="my-2">
              <FloatingLabel variant="outlined" label="Car Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="my-2">
              <FloatingLabel variant="outlined" label="Rent per Day" type="number" value={rent} onChange={(e) => setRent(e.target.value)}/>
            </div>

            <div>
              <div>
                <Label value="Upload file" />
              </div>
              <FileInput id="photo" onChange={(e) => setPhoto(e.target.files[0])}/>
            </div>
            
            <div>
              <div>
                <Label value="Size" />
              </div>
              <Select id="size" onChange={(e) => setSize(e.target.value)} required>
                <option hidden>Choose Size</option>
                <option value={1}>Small</option>
                <option value={2}>Medium</option>
                <option value={4}>Large</option>
              </Select>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Add Car"}
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}