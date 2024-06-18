import { cn } from '@/utils/className';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Screen: React.FC<ScreenProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-col items-center w-full min-h-screen overflow-y-auto text-gray-600', className)} {...props}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
      {children}
    </div>
  );
};
