import { createBrowserRouter } from "react-router";
import Headers from "./Headers";
const rootRouter = createBrowserRouter([
  {
    path: "/",
  },
]);

function App() {
  return (
    <>
      <Headers></Headers>
    </>
  );
}

export default App;
