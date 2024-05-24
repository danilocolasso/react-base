import React from 'react'
import { format } from 'date-fns'


import { cn } from '@/utils/className'
import { Calendar } from '@/components/Calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/Popover'
import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { useDatePicker } from './useDatePicker'

export interface DatePickerProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  required?: boolean
  dateFormat?: string
  submitDateFormat?: string
  placeholder?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  id,
  label,
  name,
  required,
  dateFormat = 'dd/MM/yyyy',
  submitDateFormat = 'yyyy-MM-dd',
  placeholder,
}) => {
  const {
    date,
    isOpen,
    inputRef,
    setIsOpen,
    handleDateSelect,
    handleInputChange,
  } = useDatePicker(dateFormat);

  if (!placeholder) {
    placeholder = dateFormat.replace(/[a-zA-Z]/g, '_');
  }

  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
        <Input
              ref={inputRef}
              placeholder={placeholder}
              className='cursor-pointer'
              value={date ? format(date, dateFormat) : ''}
              onChange={handleInputChange}
              onClick={() => setIsOpen(true)}
            />
            <Input
              type='hidden'
              name={name}
              value={date ? format(date, submitDateFormat) : ''}
            />
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
};
