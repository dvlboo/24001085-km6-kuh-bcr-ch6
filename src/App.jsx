// source
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import router from './routes';
import store from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />

      <ToastContainer theme="colored" />
    </Provider>
  )
}