import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
})

/**
 * Идентификатор поста
 */
export type User = z.infer<typeof UserSchema>

export function fetchUser(id: string): Promise<User> {
  return fetch('/api/users/' + id)
    .then(resp => resp.json())
    .then(data =>{
        console.log('data', data)
       return UserSchema.parse(data)}
      )
}

