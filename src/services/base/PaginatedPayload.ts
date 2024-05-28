export class PaginatedPayload {
  query?: string
  sort?: string
  order?: 'asc' | 'desc'
  page?: number = 1
  pageSize?: number = 10
}