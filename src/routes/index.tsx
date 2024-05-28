import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/guards/AuthGuard'
import { Login } from '@/pages/Login'
import { Home } from '@/pages/Home'
import { Sales } from '@/pages/Sales'
import { Order } from '@/pages/Sales/Order'

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  { // TODO remove
    path: '/home',
    Component: Home,
  },
  { // TODO remove
    path: '/operations/orders/new',
    Component: Sales,
  },
  { // TODO remove
    path: '/operations/orders',
    Component: Order,
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