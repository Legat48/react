import { Loader  }  from  "../Loader"
import { FC } from "react"
import { fetchUser } from "../../api/User"
import { UserView } from "./UserView"
import { useQuery } from "@tanstack/react-query"

interface FetchUserViewProps  {
  userId:  string
}


export const FetchUserListView: FC<FetchUserViewProps> = ({userId}) => {

  const userQuery =  useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId)
  },)

  switch (userQuery.status) {
    case "pending":
      return <Loader/>

    case "success":
      return <UserView user={userQuery.data}/>

    case "error":
      return <div>
        Error

        <button onClick={() => userQuery.refetch()}>Повторить</button>
      </div>

  }
}