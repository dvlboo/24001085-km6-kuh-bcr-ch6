import UsersComponent from "../../components/Menu/Users";
import NavbarComponent from "../../components/Navigation/Navbar";
import SidebarComponent from "../../components/Navigation/Sidebar";

export default function UsersData() {
  return (
    <>
      <NavbarComponent/>
      <div className="flex">
        <SidebarComponent/>
        <UsersComponent/>
      </div>
    </>
  )
}