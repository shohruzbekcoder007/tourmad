export type UserType = {
    birth_date: Date | null,
    email: string | null,
    first_name: string | null,
    gender: "male" | "female",
    last_name: string | null,
    middle_name: string | null,
    role: "user" | "admin"
}