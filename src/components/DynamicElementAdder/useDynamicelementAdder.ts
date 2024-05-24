import { ReactNode, useState } from 'react';

export const useDynamicElementAdder = () => {
  const [elements, setElements] = useState<ReactNode[]>([]);

  const addElement = (children: ReactNode, onAdd?: (index: number) => void) => {
    setElements([...elements, children]);

    if (onAdd) {
      onAdd(elements.length);
    }
  };

  const removeElement = (index: number, onRemove?: (index: number) => void) => {
    setElements(elements.filter((_, i) => i !== index));

    if (onRemove) {
      onRemove(index);
    }
  };

  return {
    elements,
    addElement,
    removeElement,
  };
}