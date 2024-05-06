import { Card, FloatingLabel } from "flowbite-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCar } from "../../redux/actions/cars"

export default function DetailCar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const { car } = useSelector((state) => state.cars)

  useEffect(() => {
    dispatch(getCar(navigate, id))
  }, [dispatch, id, navigate])


  return (
    <Card className="flex items-center">
      <h2>Car Info</h2>
      <Card className="w-80 h-auto">
        <img  src={car?.photo}/>
      </Card>
      <div className="mt-4">
        <FloatingLabel variant="outlined" label="Name" value={car?.name}  color="success" disabled/>
      </div>
      <div className="mt-2">
        <FloatingLabel variant="outlined" label="Rent/Day" value={`Rp. ${car?.rent_per_day}`}  color="success" disabled/>
      </div>
      <div className="mt-2">
        <FloatingLabel variant="outlined" label="Size" value={car?.size?.size_category}  color="success" disabled/>
      </div>
    </Card>
  )
}