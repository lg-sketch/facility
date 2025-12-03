export interface ServiceItem {
  name: string;
  id: string;
}

export interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
  posts: number;
  followers: number;
  following: number;
  bio: string;
}

export interface ProjectStats {
  completed: number;
  total: number;
  team: string[];
}
