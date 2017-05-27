export interface Issue {
    state: string;
    description: string;
    address: string;
    author: Author;
    updated_at: string;
    created_at: string;
    id: number;
    photo_path: string;
}

export interface Author {
    phone_number: string;
    first_name: string;
    last_name: string;
    user_id: string;
}


