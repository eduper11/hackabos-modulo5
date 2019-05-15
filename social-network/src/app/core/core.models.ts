export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}

export interface SocialNetworkUser {
  uuid: number;
  email: string;
  fullName: string;
  avatarUrl: string;
  preferences: {
    isPublicProfile: boolean;
    linkedIn: string;
    twitter: string;
    github: string;
    description: string;
  };
}
export interface Owner {
  uuid: string;
  avatarUrl?: any;
  fullName: string;
}

export interface Author {
  uuid: string;
  avatarUrl?: any;
  fullName: string;
}

export interface SocialNetworkPost {
  likes: any[];
  owner: Owner;
  author: Author;
  content: string;
  comments: any[];
  createdAt: number;
  id: string;
}
