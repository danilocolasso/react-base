import { PaginatedResponse } from '@/services/base/PaginatedResponse';
import { useCallback, useEffect, useState } from 'react';
import { SelectOption } from '@/components/Select/Select';
import { debounce } from '@/utils/debounce';

export const useAsyncSelect = <T extends SelectOption>(
  service: (query: { query: string }) => Promise<PaginatedResponse<T>>,
  map?: (options: T[]) => any[],
  autofetch = false,
  debounceTime = 300
) => {
  const [options, setOptions] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOptions = async (query: string) => {
    setLoading(true);
    const response = await service({ query });
    const values = map ? map(response.data) : response.data;
    setOptions(values);
    setLoading(false);
  };

  const debouncedFetchOptions = useCallback(debounce(fetchOptions, debounceTime), [fetchOptions]);

  const handleSearchChange = (value: string) => {
    debouncedFetchOptions(value);
  };

  useEffect(() => {
    if (autofetch) {
      fetchOptions('');
    }
  }, [fetchOptions]);

  return {
    options,
    loading,
    handleSearchChange,
  };
}
