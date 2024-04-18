import { useState } from 'react';

interface UseButtonProps {
  loading?: boolean;
}

export function useButton({ loading: isLoading = false }: UseButtonProps = {}) {
  const [loading, setLoading] = useState(isLoading);

  const handleClick = async (action: () => Promise<void>) => {
    setLoading(true);
    try {
      await action();
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleClick,
  };
}
