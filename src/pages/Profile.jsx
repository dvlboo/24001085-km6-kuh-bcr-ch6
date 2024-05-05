import ProfileComponent from "../components/Auth/Profile";
import NavbarComponent from "../components/Navigation/Navbar";

export default function Profile() {
  return (
    <>
      <NavbarComponent/>
      <div className="container mx-auto flex justify-center items-center h-full">
        <ProfileComponent />
      </div>
    </>
  )
}
