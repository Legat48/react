import { usePostList } from "../../api/Posts"
import { Loader  }  from  "../Loader"
import { PostListView } from "./PostListView"
export const FetchPostListView = () => {
  const { state, refetch } = usePostList()
  switch (state.status) {
    case "idle":
    case "pending":
      return <Loader/>
    case "success":
      return <PostListView postList={state.data}/>
    case "error":
      return <div>Error
        <button onClick={refetch}>Повторить</button>
      </div>

  }
}