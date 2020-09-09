export interface ITodo {
  uuid: string;
  task: string;
  done: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface IErrMsg {
  message?: string;
}
