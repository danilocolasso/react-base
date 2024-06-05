import { DataTableHead } from './DataTableHead';
import { DataTableBody } from './DataTableBody';
import { useDataTable } from './useDataTable';
import { DataTablePagination } from './DataTablePagination';
import { PaginatedPayload } from '@/services/base/PaginatedPayload';
import { PaginatedResponse } from '@/services/base/PaginatedResponse';
import { TableAction } from '@/components/DataTable/DataTableActions';
import { Icon } from '@/components/Icon';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  value?: (row: T) => string | React.ReactNode;
}

export interface DataTableProps<T> {
  service: (params: PaginatedPayload) => Promise<PaginatedResponse<T>>;
  columns: TableColumn<T>[];
  actions?: TableAction<T>[];
  sort?: keyof T | undefined;
  order?: 'asc' | 'desc' | undefined;
  pagination?: boolean;
}

export const DataTable = <T,>({
  service,
  columns,
  actions,
  sort: defaultSort,
  order: defaultOrder,
  pagination = true,
}: DataTableProps<T>) => {
  const {
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
  } = useDataTable<T>({ service, sort: defaultSort, order: defaultOrder });

  const getLoading = () => {
    if (!loading) return;

    return (
      <div className='flex items-center justify-center absolute inset-0 z-50'>
        <div className='flex gap-2 items-center px-4 py-2 bg-black/40 rounded-sm text-white cursor-default select-none'>
          <Icon name='FaSpinner' className='animate-spin' />
          <span>Carregando</span>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col gap-2 h-full relative'>
      { getLoading() }
      <div className='flex h-full px-4 rounded-sm border relative w-full overflow-auto'>
        <table className='w-full h-fit border-collapse caption-bottom text-sm'>
          <DataTableHead columns={columns} sort={sort} order={order} onSort={handleSort} />
          <DataTableBody columns={columns} data={data} actions={actions} />
        </table>
      </div>
      {pagination && (
          <DataTablePagination
            page={page}
            pageSize={pageSize}
            totalItems={totalItems}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
    </div>
  );
};
