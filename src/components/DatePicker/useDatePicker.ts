import React, { useRef, useState } from 'react'
import { format, parse, isValid } from 'date-fns'

export const useDatePicker = (dateFormat: string) => {
    const [date, setDate] = useState<Date>()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDateSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setIsOpen(false);
        if (inputRef.current) {
        inputRef.current.value = selectedDate
            ? format(selectedDate, dateFormat)
            : '';
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const parsedDate = parse(inputValue, dateFormat, new Date());

        if (isValid(parsedDate)) {
        setDate(parsedDate);
        } else {
        setDate(undefined);
        }
    };
    
    return {
        date,
        isOpen,
        inputRef,
        setIsOpen,
        handleDateSelect,
        handleInputChange,
    };
}