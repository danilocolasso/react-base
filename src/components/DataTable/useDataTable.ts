import { useState, useEffect } from 'react';
import { DataTableProps } from './DataTable';

interface UseDataTableProps<T> extends Omit<DataTableProps<T>, 'columns'> {}

export const useDataTable = <T,>({ service, sort: defaultSort, order: defaultOrder }: UseDataTableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState<keyof T | undefined>(defaultSort);
  const [order, setOrder] = useState<'asc' | 'desc' | undefined>(defaultOrder);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    const response = await service({
      page,
      pageSize,
      sort: sort ? String(sort) : undefined,
      order
    });

    setData(response.data);
    setTotalItems(response.totalItems);
    setTotalPages(response.totalPages);
    setPageSize(response.pageSize);
    setPage(response.page);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, sort, order]);

  const handleSort = (key: keyof T) => {
    const toggleOrder = sort === key && order === 'asc' ? 'desc' : 'asc';
    setSort(key);
    setOrder(toggleOrder);
    fetchData();
  };

  const handlePageChange = (page: number) => {
    console.log(page);
    setPage(page);
    fetchData();
  };

  return {
    data,
    page,
    pageSize,
    totalPages,
    totalItems,
    sort,
    order,
    loading,
    handleSort,
    handlePageChange,
  };
};
