interface FriendRequest {
  uuid: string;
  avatarUrl?: string;
  fullName: string;
  request: Request;
}

interface Request {
  _id: string;
  uuid: string;
  confirmed: boolean;
  createdAt: string;
  confirmedAt?: string;
  rejectedAt?: any;
}
