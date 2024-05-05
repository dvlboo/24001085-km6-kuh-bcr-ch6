"use client";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile, logout } from "../../redux/actions/auth";

export default function NavbarComponent() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, token } = useSelector((state) => state.auth)

  useEffect(() => {
    // get user profile if we have token
    dispatch(getProfile(null, null, null))
  }, [dispatch, token])
  
  
  
  return (
    <Navbar className="bg-slate-200" rounded>
      <Navbar.Brand as={Link} to={'/'}>
        <img src="/assets/logo-bcr.png" className="mr-3 h-6 sm:h-9" alt="Logonya BCR" />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center cursor-pointer">
        {user ? (
          <>
            <p className="mr-3">{user?.name}</p>
            <Dropdown
                arrowIcon={false}
                inline
                label={
                  // ini nanti akan berubah sesuai token (harusnya gituu)
                  <Avatar alt="User settings" img={user?.photo} rounded />
                }
              >
                {
                  user?.roles == 'user' ? (
                    <>
                      <Dropdown.Item as={Link} to={'/profile'}>Profile</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => {
                          dispatch(logout())
                          navigate('/login')
                        }}>Log Out
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item as={Link} to={'/profile'}>Profile</Dropdown.Item>
                      <Dropdown.Item as={Link} to={'/dashboard'}>Dashboard</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => {
                          dispatch(logout())
                          navigate('/login')
                        }}>Log Out
                      </Dropdown.Item>
                    </>
                  )
                }
            </Dropdown> 
          </>
        ) : (
          <>
            <Button className="mx-2" as={Link} to={'/register'} color="gray">Register</Button>
            <Button className="mx2" as={Link} to={'/login'} label="2">Login</Button>
          </>
        )
        
      }
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}