import { DataTableProps } from './DataTable';

interface DataTableHeadProps<T> extends Omit<DataTableProps<T>, 'service'> {
  onSort: (key: keyof T) => void;
}

export const DataTableHead = <T,>({ columns, sort, order, onSort, selectable }: DataTableHeadProps<T>) => { 
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            onClick={() => column.sortable && onSort(column.key)}
            className={column.sortable ? 'cursor-pointer' : ''}
          >
            {column.label} {sort === column.key && (order === 'asc' ? '↑' : '↓')}
          </th>
        ))}
      </tr>
    </thead>
  );
};
