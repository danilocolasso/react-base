export type User = {
    id: number
    username: string
    password?: string
    email?: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
    token?: string
    roles?: string[]
    permissions?: string[]
}