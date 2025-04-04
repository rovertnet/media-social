import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import SignUp from './pages/signup/SignUp.jsx'
import SignIn from './pages/signIn/SignIn.jsx'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "../src/contexte/SessionContext.jsx";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/connexion",
    element: <SignIn />,
  },
  {
    path: "/inscription",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </SessionProvider>
    </QueryClientProvider>
  </StrictMode>
);
