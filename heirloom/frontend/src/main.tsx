import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PreInterview from './pages/Pre-Interview'; 
import Conversations from './pages/Conversations';
import LandingPage from './pages/LandingPage';  
import ErrorPage from './components/ErrorPage';      
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',  // Root path
    element: <LandingPage />,  // Landing page will render directly without MainLayout
    errorElement: <ErrorPage />,  // Error element for landing page errors
  },
  {
    path: '/',  // Main layout for other routes
    element: <MainLayout />,  
    errorElement: <ErrorPage />,  // Catch all errors
    children: [
      {
        path: 'login',  // Login route
        element: <Login />,
      },
      {
        path: 'register',  // Register route
        element: <Register />,
      },
      {
        path: 'dashboard',  // Dashboard route (protected)
        element: <PrivateRoute><Dashboard /></PrivateRoute>, 
      },
      {
        path: 'pre-interview',  // Pre-Interview route (protected)
        element: <PrivateRoute><PreInterview /></PrivateRoute>, 
      },
      {
        path: 'conversation',  // Conversations route (protected)
        element: <PrivateRoute><Conversations /></PrivateRoute>, 
      },
      {
        path: 'profile',  // Profile route (protected)
        element: <PrivateRoute><Profile /></PrivateRoute>, 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

