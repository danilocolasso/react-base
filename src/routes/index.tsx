import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AuthGuard } from '@/guards/AuthGuard';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import { SalesCreate } from '@/pages/Sales';
import { Sales } from '@/pages/Sales';

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
    path: '/operations/sales/create',
    Component: SalesCreate,
  },
  { // TODO remove
    path: '/operations/sales',
    Component: Sales,
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
        Component: Home,
      }
    ],
  }
])

export function Routes(){
  return (
    <RouterProvider router={router} />
  )
}