export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
