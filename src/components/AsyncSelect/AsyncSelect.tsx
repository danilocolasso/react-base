import { Select, SelectOption, SelectProps } from '@/components/Select';
import { PaginatedResponse } from '@/services/base/PaginatedResponse';
import { useAsyncSelect } from './useAsyncSelect';
import React from 'react';

export interface AsyncSelectProps extends Omit<SelectProps, 'options'> {
  service: (payload: any) => Promise<PaginatedResponse<any>>;
  map?: (options: any[]) => any[];
  autofetch?: boolean;
}

export const AsyncSelect = React.forwardRef<HTMLDivElement, AsyncSelectProps>(({
  service,
  map,
  autofetch,
  ...props
}, ref) => {
  const { options, loading, handleSearchChange } = useAsyncSelect<SelectOption>(
    service,
    map,
    autofetch,
  );

  return (
    <Select
      {...props}
      options={options}
      loading={loading}
      onSearchChange={handleSearchChange}
      ref={ref}
    />
  );
});