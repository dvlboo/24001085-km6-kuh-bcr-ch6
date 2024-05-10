import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/Cars/CarsList";
import { getCars } from "../../redux/actions/cars";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch()

  const { cars } = useSelector((state) => state.cars)

  useEffect(() => {
    // get Cars
    dispatch(getCars())
  }, [dispatch])
  
  return (
    <>
      <div>Welcome to Binar Car Rental</div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around">
          {cars.length > 0 && 
            cars.map((cars) => (
              <CarsList key={cars?.id} cars={cars}/>
          ))}
        </div>
      </div>
    </>
  )
}
