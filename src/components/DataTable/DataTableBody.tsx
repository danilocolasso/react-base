import { DataTableProps } from './DataTable';

interface DataTableBodyProps<T> extends Omit<DataTableProps<T>, 'service'> {
  data: T[];
}

export const DataTableBody = <T,>({ data, columns }: DataTableBodyProps<T>) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={String(column.key)}>
              {row[column.key] as string}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
