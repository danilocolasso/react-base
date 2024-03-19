import * as React from 'react'
import { Label } from '@/components/ui/label'
import { v4 as uuidv4 } from 'uuid'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, type, label, ...props }, ref) => {
    if (label && !id) {
      id = label.toLocaleLowerCase() + '-' + uuidv4()
    }
    
    return (
      <div className='flex flex-col gap-1 w-full'>
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          type={type}
          id={id}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
