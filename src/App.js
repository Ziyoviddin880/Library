import "./App.css";
import Background from "./components/background/Background";
import PageNotFound from "./pages/pagenotFound/PageNotFound";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";

import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/Signup" element={<Signup setUser={setUser} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <Background />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
