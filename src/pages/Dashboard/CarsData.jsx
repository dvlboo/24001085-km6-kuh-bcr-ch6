import CarsComponent from "../../components/Menu/Cars";
import NavbarComponent from "../../components/Navigation/Navbar";
import SidebarComponent from "../../components/Navigation/Sidebar";

export default function CarsData() {
  return (
    <>
      <NavbarComponent/>
      <div className="flex">
        <SidebarComponent/>
        <CarsComponent/>
      </div>
    </>
  )
}