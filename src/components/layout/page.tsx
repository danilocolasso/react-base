import { cn } from '@/lib/utils'
import React from 'react'

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({children, className, ...props}, ref) => (
    <div className={cn('flex flex-col w-full h-screen', className)} {...props} ref={ref}>
      {children}
    </div>
  )
)