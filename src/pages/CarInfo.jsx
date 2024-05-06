import DetailCar from "../components/Cars/DetailCar";
import NavbarComponent from "../components/Navigation/Navbar";

export default function CarInfo() {
  return (
    <>
      <NavbarComponent/>
      <div className="container mx-auto flex justify-center items-center h-full">
        <DetailCar />
      </div>
    </>
  )
}