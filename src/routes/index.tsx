import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/guards/AuthGuard'
import { Login } from '@/components/page/login'
import { Home } from '@/components/page/home'

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ],
  }
])

export function Routes(){
  return (
    <RouterProvider router={router} />
  )
}