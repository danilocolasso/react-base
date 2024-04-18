import { useState } from 'react';

interface UseInputProps {
  initialValue?: string;
  validator?: (value: string) => boolean;
}

function useInput({ initialValue = '', validator }: UseInputProps) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  function handleChange(newValue: string) {
    if (validator) {
      setIsValid(validator(newValue));
    }
    setValue(newValue);
  }

  return {
    value,
    setValue: handleChange,
    isValid,
  };
}

export default useInput;
