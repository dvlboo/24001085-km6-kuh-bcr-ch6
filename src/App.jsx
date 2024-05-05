// dependencies
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// components
import NavbarComponent from './components/Navigation/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import UsersData from './pages/DashMenu/UsersData';
import CarsData from './pages/DashMenu/CarsData';
import NewCar from './pages/DashMenu/NewCar';

const router = createBrowserRouter([
  {
    path : '/',
    element: (
      <>
        <NavbarComponent/>
        <Home/>
      </>
    )
  },
  {
    path : '/login',
    element :(
      <>
        <Login/>
      </>
    )
  },
  {
    path : '/register',
    element :(
      <>
        <Register/>
      </>
    )
  },
  {
    path : '/profile',
    element :(
      <>
        <Profile/>
      </>
    )
  },
  {
    path : '/dashboard',
    element :(
      <div className='overflow-y-auto'>
        <Dashboard/>
      </div>
    )
  },
  {
    path : '/dashboard/users',
    element :(
      <div className='overflow-y-auto'>
        <UsersData/>
      </div>
    )
  },
  {
    path : '/dashboard/cars',
    element :(
      <div className='overflow-y-auto'>
        <CarsData/>
      </div>
    )
  },
  {
    path : '/dashboard/newCar',
    element :(
      <div className='overflow-x-hidden'>
        <NewCar/>
      </div>
    )
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}