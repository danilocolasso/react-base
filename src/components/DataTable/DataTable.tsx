import { DataTableHead } from './DataTableHead';
import { DataTableBody } from './DataTableBody';
import { useDataTable } from './useDataTable';
import { DataTablePagination } from './DataTablePagination';
import { PaginatedPayload } from '@/services/base/PaginatedPayload';
import { PaginatedResponse } from '@/services/base/PaginatedResponse';
import { TableAction } from '@/components/DataTable/DataTableActions';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
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

  if (loading && !data.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='flex flex-col gap-2 p-3'>
      <div className='flex px-4 rounded-sm border relative w-full overflow-auto'>
        <table className='w-full border-collapse caption-bottom text-sm'>
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
