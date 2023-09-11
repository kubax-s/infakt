import { FC } from 'react';
import { MainPage, AccountantsPage } from './pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
    {
    path: "/ksiegowi",
    element: <AccountantsPage />,
  },
]);

const App: FC = () => <RouterProvider router={router} /> 

export default App;
