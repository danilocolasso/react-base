export class PaginatedResponse<T> {
  data: T[] = []
  page: number = 1
  pageSize: number = 10
  totalItems: number = 0
  totalPages: number = 0
}