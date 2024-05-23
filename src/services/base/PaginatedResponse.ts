export class PaginatedResponse<T> {
  data: T[] = []
  total: number = 0
  page: number = 1
  pageSize: number = 10
}