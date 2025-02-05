import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Map from "../Map";

export default function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Map />
      </QueryClientProvider>
    </div>
  );
}
