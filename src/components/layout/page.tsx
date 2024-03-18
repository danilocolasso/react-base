import React from 'react'

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Page = React.forwardRef<HTMLDivElement, PageProps>(({children, ...props}, ref) => (
  <div className='flex flex-col w-full h-screen text-gray-700' {...props} ref={ref}>
    {children}
  </div>
))