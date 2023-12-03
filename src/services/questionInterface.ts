export interface IOption {
  id: string;
  answer: string;
}

export interface IUser {
  name: string;
  avatar: string;
}

export interface IQuestion {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  answer: string;
  options: IOption[];
  user: IUser;
}

export interface IUserAnswers extends Record<string, string> {}
