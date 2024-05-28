import { Button } from '@/components/Button';

interface DataTablePaginationProps {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataTablePagination = ({
  page,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
}: DataTablePaginationProps) => {
  const handleNextPage = () => {
    onPageChange(Math.min(page + 1, totalPages));
  }

  const handlePreviousPage = () => {
    onPageChange(Math.max(page - 1, 1));
  }

  return (
    <div className='flex justify-between items-center'>
      <Button onClick={handlePreviousPage} disabled={page === 1}>Previous</Button>
      <span>Page {page} of {totalPages}</span>
      <Button onClick={handleNextPage} disabled={page === totalPages}>Next</Button>
    </div>
  );
}