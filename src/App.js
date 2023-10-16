import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainBody/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }]);
  return (
    <div className="grid grid-cols-12">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
