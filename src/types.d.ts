interface IUserData {
  login: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
}

interface IRepository {
  id: number;
  name: string;
  fullName: string;
  visibility: string;
  language: string;
  htmlUrl: string;
  owner: IUserData;
}

interface IGithubContext {
  updateUserName: (userName: string) => void;
  user: IUserData;
  repositories: IRepository[];
}
