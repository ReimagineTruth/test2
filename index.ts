export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  walletAddress?: string;
  following: string[];
  followers: string[];
  createdAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  media?: string[];
  likes: string[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

export interface Comment {
  id: string;
  authorId: string;
  content: string;
  likes: string[];
  createdAt: Date;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  admins: string[];
  posts: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  referenceId: string;
  read: boolean;
  createdAt: Date;
}