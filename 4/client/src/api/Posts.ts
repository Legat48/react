import { z } from "zod";
import { useState, useEffect } from "react";
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
  status: 'pending'
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

    if (state.status === 'pending') {
      // console.log('fetchPostList()', fetchPostList())
      fetchPostList().then(data => {
        console.log('data1', data)
        setState({ status: 'success', data: data.list })})
        .catch((error) => {
        console.log('data12', error)

          setState({ status: 'error', error })
        })
    }
  }, [state])

  useEffect(()  =>  {
    setState({ status: 'pending'  })
  }, [])
  const refetch = () => {
    setState({ status: 'pending' })
  }

  return { state, refetch }
}
