import { DataTableProps } from './DataTable';
import { DataTableActions } from './DataTableActions';

interface DataTableBodyProps<T> extends Omit<DataTableProps<T>, 'service'> {
  data: T[];
}

export const DataTableBody = <T,>({ data, columns, actions }: DataTableBodyProps<T>) => {
  return (
    <tbody className='[&_tr:last-child]:border-0'>
      {data.map((row, index) => (
        <tr key={index} className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          {columns.map((column) => (
            <td key={String(column.key)} className='p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'>
              {row[column.key] as string}
            </td>
          ))}
          { actions && <td><DataTableActions actions={actions} row={row} /></td> }
        </tr>
      ))}
    </tbody>
  );
};
