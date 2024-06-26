import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../../api/User"
import { Loader } from "../Loader"
import { AuthForm } from "../AuthForm"
import { PostForm } from "../PostForm"

export const Account = () => {
  const meQuery = useQuery({
    queryKey: ["users", 'me'],
    queryFn: () => {
      return fetchMe(); // Возвращаем результат вызова fetchMe
    },
    // staleTime: 5 * 60 * 1000, // Данные будут считаться свежими в течение 5 минут
    // cacheTime: 10 * 60 * 1000, // Данные будут оставаться в кэше в течение 10 минут
    refetchOnWindowFocus: false, // Не выполнять запрос при фокусировке окна
    refetchOnMount: false, // Не выполнять запрос при монтировании компонента
  })

  switch (meQuery.status) {
    case 'pending':
      return <Loader />
    case 'error':
      return <AuthForm></AuthForm>
    case 'success':
      return <PostForm/>
  }
}