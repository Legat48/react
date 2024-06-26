import { useQuery} from "@tanstack/react-query"
import { fetchPostList } from "../../api/Posts"
import { Loader  }  from  "../Loader"
import { PostListView } from "./PostListView"


export const FetchPostListView = () => {

  const postListQuery =  useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPostList()
  }, )
  console.log(postListQuery.status)
  switch (postListQuery.status) {
    case "pending":
      return <Loader/>

    case "success":
      return <PostListView postList={postListQuery.data.list}/>

    case "error":
      return <div>
        Error

        <button onClick={() => postListQuery.refetch()}>Повторить</button>
      </div>

  }
}