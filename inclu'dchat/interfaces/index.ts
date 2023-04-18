export type User = {
  id: number
  name: string
};
export interface Login {
  email: string,
  password : string
}
export interface Person {
  token : string,
  id : number
  group : string
}
export interface Message {
  created_by: string,
  content: string,
  created_at: Date,
  belongs_to: string,
  bodyFile: any,
  type: string

}

export interface Getuser {
  id: number,
  username: string,
  email: string,
  password: string,
  role_id: number,
  group_id: string
}

export interface Getevent {
  id: number,
  title: string,
  start: string,
  end: string,
  color: string,
  content: string,
  created_by: number,
  belong_to: string
}

export interface Group {
  id: number,
  name: string,
}
