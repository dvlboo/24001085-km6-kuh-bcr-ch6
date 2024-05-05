import { Card, FloatingLabel } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";
import { useEffect } from "react";

export default function ProfileComponent() {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    // get user profile if we have token
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(getProfile(null,null,null))
    }
  }, [dispatch])

  return (
    <Card className="flex items-center">
      <h2>My Profile</h2>
      <Card className="w-80 h-auto">
        <img  src={user?.photo}/>
      </Card>
      <div className="mt-4">
        <FloatingLabel variant="outlined" label="Name" value={user?.name}  color="success" disabled/>
      </div>
      <div className="mt-2">
        <FloatingLabel variant="outlined" label="Email" value={user?.email}  color="success" disabled/>
      </div>
      <div className="mt-2">
        <FloatingLabel variant="outlined" label="Roles" value={user?.roles}  color="success" disabled/>
      </div>
    </Card>
  )
}