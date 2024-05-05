import NavbarComponent from "../components/Navigation/Navbar";
import SidebarComponent from "../components/Navigation/Sidebar";

export default function Dashboard() {
  return (
    <>
      <NavbarComponent/>
      <div className="flex">
        <SidebarComponent/>

        <div className="bg-blue-50 w-full p-4">
          <div className="text-center pt-36">
            <h1 className="text-5xl font-bold">Welcome to Dashboard</h1>
            <p className="text-4xl mt-2">Silahkan Pilih Menu di Bagian Kiri</p>
          </div>
        </div>
      </div>
    </>
  )
}