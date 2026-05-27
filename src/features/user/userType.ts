

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    baseCurrency?: string;
}
export interface UpdateUserResponse {
    data: User
}
