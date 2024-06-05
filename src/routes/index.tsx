import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthGuard } from '@/guards/AuthGuard'
import { Login } from '@/pages/Login'
import { Home } from '@/pages/Home'
import { OrdersNew } from '@/pages/Sales/OrdersNew'
import { Orders } from '@/pages/Sales/Orders'

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
    Component: OrdersNew,
  },
  { // TODO remove
    path: '/operations/orders',
    Component: Orders,
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