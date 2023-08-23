import { useQuery } from "@tanstack/react-query";

function App() {
  const uri = `https://restcountries.com/v3.1/all`;

  const { isLoading, error, data } = useQuery({
    queryKey: [uri],
    queryFn: async () => {
      const response = await fetch(uri, {
        method: "GET",
        mode: "cors",
      });

      return await response.json();
    },
  });

  if (isLoading) {
    return <pre>{`Loading...`}</pre>;
  }

  if (error) {
    return (
      <pre>{`Oops.. Something went wrong: ${JSON.stringify(
        error,
        null,
        2,
      )}`}</pre>
    );
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
