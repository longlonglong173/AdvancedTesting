import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import styles from './app.module.css';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export function App() {
  const isLogin = localStorage.getItem('isLogin');
  useEffect(() => {
    window.addEventListener('storage', () => {
      const changeIsLogin = localStorage.getItem('isLogin');
      if (isLogin !== changeIsLogin) {
        window.location.reload();
      }
    });
  }, [isLogin]);

  return <RouterProvider router={router} />;
}

export default App;
