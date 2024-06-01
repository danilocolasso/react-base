import { DataTableProps, TableColumn } from './DataTable';
import { Button } from '@/components/Button';

interface DataTableHeadProps<T> extends Omit<DataTableProps<T>, 'service'> {
  onSort: (key: keyof T) => void;
}

export const DataTableHead = <T,>({ columns, sort, order, onSort }: DataTableHeadProps<T>) => {
  const getHeaderColumn = (column: TableColumn<T>) => {
    if (column.sortable) {
      return (
        <Button
          variant='ghost'
          icon={sort === column.key && (order === 'asc' ? 'FaCaretUp' : 'FaCaretDown')}
          className='flex items-center gap-1'
          onClick={() => onSort(column.key)}
        >
          {column.label}
        </Button>
      );
    }

    return column.label;
  };

  return (
    <thead className='[&_tr]:border-b'>
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            className='px-2 p-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
          >
            {getHeaderColumn(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
