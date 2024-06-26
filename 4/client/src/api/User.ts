import { z } from "zod";
import { validateResponse } from "./validateResponse";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
});

/**
 * Идентификатор поста
 */
export type User = z.infer<typeof UserSchema>;

export function fetchUser(id: string): Promise<User> {
  return fetch('/api/users/' + id)
    .then(resp => resp.json())
    .then(data => {
      return UserSchema.parse(data);
    });
}

export function registerUser(username: string, password: string): Promise<void>  {
  return fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => undefined)
}


export function login(username: string, password: string): Promise<void>  {
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(validateResponse)
    .then(() => undefined)
}

export function fetchMe(): Promise<User>  {
  return fetch('/api/users/me')
    .then(validateResponse)
    .then(resp => resp.json())
    .then(data => {
      return UserSchema.parse(data);
    });

}