import { useQuery } from "graphql-hooks";
import "./App.css";

const title = `query MyQuery {
  test {
    title
  }
}`;

function App() {
  const { data } = useQuery(title);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}

export default App;
