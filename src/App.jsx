// dependencies
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// components
import NavbarComponent from './components/Navigation/Navbar';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

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
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}