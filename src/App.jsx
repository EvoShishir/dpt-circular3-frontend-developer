import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchFlight from "./Pages/SearchFlight/SearchFlight";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchFlight />,
    },
    {
      path: "/flights",
      // element: <SignInPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
