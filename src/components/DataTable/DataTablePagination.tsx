import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

interface DataTablePaginationProps {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataTablePagination = ({
  page,
  // pageSize,
  // totalItems,
  totalPages,
  onPageChange,
}: DataTablePaginationProps) => {
  const handleFirstPage = () => {
    onPageChange(1);
  }

  const handleLastPage = () => {
    onPageChange(totalPages);
  }

  const handleNextPage = () => {
    onPageChange(Math.min(page + 1, totalPages));
  }

  const handlePreviousPage = () => {
    onPageChange(Math.max(page - 1, 1));
  }

  return (
    <div className='flex w-full justify-center md:w-auto md:justify-end'>
      <div className='flex items-center gap-8'>
        <span className='text-sm text-gray-600 cursor-default'>
          Página {page} de {totalPages}
        </span>
        <div className='flex gap-2'>
          <Button
            title='Primeira página'
            variant='outline'
            className='w-6 h-6 p-3 gap-0'
            iconClassName='w-3 h-3'
            onClick={handleFirstPage}
            disabled={page === 1}
          >
            <Icon name='FaChevronLeft' className='w-3 h-3' />
            <Icon name='FaChevronLeft' className='w-3 h-3 -ml-3.5' />
          </Button>
          <Button
            title='Página anterior'
            variant='outline'
            className='w-6 h-6 p-3'
            icon='FaChevronLeft'
            iconClassName='w-3 h-3'
            onClick={handlePreviousPage}
            disabled={page === 1}
          />
          <Button
            title='Próxima página'
            variant='outline'
            className='w-6 h-6 p-3'
            icon='FaChevronRight'
            iconClassName='w-3 h-3'
            onClick={handleNextPage}
            disabled={page === totalPages}
          />
          <Button
            title='Última página'
            variant='outline'
            className='w-6 h-6 p-3 gap-0'
            iconClassName='w-3 h-3'
            onClick={handleLastPage}
            disabled={page === totalPages}
          >
            <Icon name='FaChevronRight' className='w-3 h-3' />
            <Icon name='FaChevronRight' className='w-3 h-3 -ml-3.5' />
          </Button>
        </div>
      </div>
    </div>
  );
}