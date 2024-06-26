import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css';
import { FetchPostListView } from './components/PostListView/FetchPostListView';
import { Account } from "./components/Account/Account";
const queryClient = new QueryClient();

function App() {
  return <div className="app">
    <QueryClientProvider client={queryClient}>
      <Account/>
      <FetchPostListView />
    </QueryClientProvider>
  </div>;
}

export default App;
