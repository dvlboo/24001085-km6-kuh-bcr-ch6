"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function NavbarComponent() {
  
  
  
  
  return (
    <Navbar className="bg-slate-200" rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/assets/logo-bcr.png" className="mr-3 h-6 sm:h-9" alt="Logonya BCR" />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center cursor-pointer">
        <p className="mr-3">Guest</p>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // ini nanti akan berubah sesuai token (harusnya gituu)
            <Avatar alt="User settings" img="https://img.icons8.com/puffy-filled/32/user.png" rounded />
          }
        >
          {/* Ini juga harusnya berunbah sesuai token */}
          {/* <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item> */}

          {/* saat ini */}
          <Dropdown.Item>Login</Dropdown.Item>
          <Dropdown.Item>Register</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Dashboard</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}