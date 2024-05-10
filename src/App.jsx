import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchFlight from "./Pages/SearchFlight/SearchFlight";
import FlightList from "./Pages/FlightList/FlightList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchFlight />,
    },
    {
      path: "/flights",
      element: <FlightList />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
