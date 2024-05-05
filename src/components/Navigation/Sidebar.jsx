"use client";
import { Avatar, Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { IoCarSport } from "react-icons/io5";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Users and Cars Menu Dashboard" className="h-screen">
      <Sidebar.Items>

        {/* User Info */}
        <Sidebar.ItemGroup>
          <Avatar size="lg" rounded bordered/>
          <div className="text-center space-y-1 font-medium dark:text-white">
            <div>Name</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
          </div>
        </Sidebar.ItemGroup>
        
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Collapse icon={IoCarSport} label="Cars">
            <Sidebar.Item href="#">List Cars</Sidebar.Item>
            <Sidebar.Item href="#">Add Cars</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}