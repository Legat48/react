import { z } from "zod";
import { useState, useEffect } from "react";
import { validateResponse } from "./validateResponse";


export const PostSchema = z.object({
  id: z.string(),
  text: z.string(),
  authorId: z.string(),
  createdAt: z.union([z.string(), z.number()]),
})

export type Post = z.infer<typeof PostSchema>;

export const PostList = z.array(PostSchema);

export type PostList = z.infer<typeof PostList>;

export const FetchPostListSchema = z.object({
  list: PostList,
})

export type FetchPostListResponce = z.infer<typeof FetchPostListSchema>;
export function fetchPostList(): Promise<FetchPostListResponce> {
  return fetch('/api/posts')
    .then(resp => resp.json())
    .then(data => {
      return FetchPostListSchema.parse(data)
    })
}

interface IdleRequestState {
  status: 'idle'
}

interface LoadingRequestState {
  status: 'loading'
}

interface SuccessRequestState {
  status: 'success'
  data: PostList
}

interface ErrorRequestState {
  status: 'error'
  error: unknown
}

type RequestState = IdleRequestState | LoadingRequestState | SuccessRequestState | ErrorRequestState;

export function usePostList() {
  const [state, setState] = useState<RequestState>({ status: 'idle' })
  useEffect(() => {

    if (state.status === 'loading') {
      fetchPostList().then(data => {
        setState({ status: 'success', data: data.list })})
        .catch((error) => {
          setState({ status: 'error', error })
        })
    }
  }, [state])

  useEffect(()  =>  {
    setState({ status: 'loading'  })
  }, [])
  const refetch = () => {
    setState({ status: 'loading' })
  }

  return { state, refetch }
}


export function createPost(text: string): Promise<void> {
  return fetch('/api/posts', {
    method: 'POST',
    headers:  {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ text  })
  })
  .then(validateResponse)
  .then(() => undefined)
}