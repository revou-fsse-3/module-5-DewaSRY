// Generated by https://quicktype.io

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export type LogInPayload = Omit<RegisterPayload, "name">;
