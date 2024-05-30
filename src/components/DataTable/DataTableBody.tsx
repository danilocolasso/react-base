import { DataTableProps } from './DataTable';
import { DataTableActions } from './DataTableActions';

interface DataTableBodyProps<T> extends Omit<DataTableProps<T>, 'service'> {
  data: T[];
}

export const DataTableBody = <T,>({ data, columns, actions }: DataTableBodyProps<T>) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={String(column.key)}>
              {row[column.key] as string}
            </td>
          ))}
          { actions && <td><DataTableActions actions={actions} row={row} /></td> }
        </tr>
      ))}
    </tbody>
  );
};
