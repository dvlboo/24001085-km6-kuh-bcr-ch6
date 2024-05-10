import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProfile } from "../../redux/actions/auth"

export const Protected = ({ children, roles }) => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get user profile
    dispatch(getProfile(navigate, null, '/login'))
  }, [dispatch, navigate])

  useEffect(() => {
    if (user?.role) {
      // check if the user has access to this pages or not
      if (roles?.length > 0) {
        if (!roles?.includes(user?.role)) {
          navigate("/");
        }
      }
    }
  }, [navigate, roles, user]);

  return children
  }

export const NonProtected = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    // get user profile
    dispatch(getProfile(navigate, '/', null))
  }, [dispatch, navigate])

  return children
}