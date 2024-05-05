"use client";
import { Avatar, Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getProfile } from "../../redux/actions/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarComponent() {

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
    <Sidebar aria-label="Users and Cars Menu Dashboard" className="h-screen">
      <Sidebar.Items>

        {/* User Info */}
        <Sidebar.ItemGroup>
          <Avatar size="lg" img={user?.photo} rounded bordered/>
          <div className="text-center space-y-1 font-medium dark:text-white">
            <div>{user?.name} as {user?.roles}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
          </div>
        </Sidebar.ItemGroup>
        
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to={'/dashboard/users'}  icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Collapse icon={IoCarSport} label="Cars">
            <Sidebar.Item as={Link} to={'/dashboard/cars'} >List Cars</Sidebar.Item>
            <Sidebar.Item as={Link} to={'/dashboard/newCar'} >Add Cars</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}