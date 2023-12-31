export type GPost = {
  created_at: string;
  description: string;
  id: string;
  images: string[];
  video?: string;
  is_commentable: boolean;
  liked: boolean;
  likes: number;
  saved: boolean;
  tags: string;
  updated_at: string;
  type?: string;
  thumbnail?: string;
  user: {
    id: string;
    username: string;
    avatar: string;
  };
};
