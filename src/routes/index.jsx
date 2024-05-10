// sources
import { createBrowserRouter } from 'react-router-dom';

// components
import {NonProtected, Protected } from '../components/Protected'
import NavbarComponent from '../components/Navigation/Navbar'

// pages
import Home from '../pages/Homepage/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Profile from '../pages/Auth/Profile';
import Dashboard from '../pages/Dashboard/Dashboard';
import UsersData from '../pages/Dashboard/UsersData';
import CarsData from '../pages/Dashboard/CarsData';
import NewCar from '../pages/Dashboard/NewCar';
import CarInfo from '../pages/Homepage/CarInfo';

const router = createBrowserRouter([
  {
    path : '/',
    element: (
      <NonProtected>
        <NavbarComponent/>
        <Home/>
      </NonProtected>
    )
  },
  {
    path : '/login',
    element :(
      <NonProtected>
        <Login/>
      </NonProtected>
    )
  },
  {
    path : '/register',
    element :(
      <NonProtected>
        <Register/>
      </NonProtected>
    )
  },
  {
    path : '/profile',
    element :(
      <Protected roles={['user','admin','superadmin']}>
        <Profile/>
      </Protected>
    )
  },
  {
    path : '/cars/:id',
    element :(
      <NonProtected>
        <CarInfo/>
      </NonProtected>
    )
  },
  {
    path : '/dashboard',
    element :(
      <Protected roles={['admin', 'superadmin']}>
        <div className='overflow-y-auto'>
          <Dashboard/>
        </div>
      </Protected>
    )
  },
  {
    path : '/dashboard/users',
    element :(
      <Protected roles={['superadmin']}>
        <div className='overflow-y-auto'>
          <UsersData/>
        </div>
      </Protected>
    )
  },
  {
    path : '/dashboard/cars',
    element :(
      <Protected roles={['admin','superadmin']}>
        <div className='overflow-y-auto'>
          <CarsData/>
        </div>
      </Protected>
    )
  },
  {
    path : '/dashboard/newCar',
    element :(
      <Protected roles={['admin', 'superadmin']}>
        <div className='overflow-x-hidden'>
          <NewCar/>
        </div>
      </Protected>
    )
  },
])

export default router