import AddCarComponent from "../../components/Menu/addCar";
import NavbarComponent from "../../components/Navigation/Navbar";
import SidebarComponent from "../../components/Navigation/Sidebar";

export default function NewCar() {
  return (
    <>
      <NavbarComponent/>
      <div className="flex">
        <SidebarComponent/>
        <AddCarComponent/>
      </div>
    </>
  )
}