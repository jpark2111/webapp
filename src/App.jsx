import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Checkout from './components/stripe/Checkout';
import Success from './components/stripe/Success';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path: 'checkout',
      element: <Checkout />,
    },
    {
      path: 'success',
      element: <Success />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
