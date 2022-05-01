import './App.css';
import CoinData from './components/CoinData';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          <CoinData/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
