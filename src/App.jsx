import RoutLayout from "./components/RoutLayout";
import Bennar from "./components/layouts/Bennar"
import Footer from "./components/layouts/Footer"
import HomeP from "./components/layouts/HomeP";
import ManP from "./components/layouts/ManP";
import Navber from "./components/layouts/Navber"
import Notfound from "./components/layouts/Notfound";
import WomanP from "./components/layouts/WomanP";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RoutLayout/>}>
          <Route path="/" element={<HomeP/>}/>
          <Route path="/Man" element={<ManP/>}/>
          <Route path="/Woman" element={<WomanP/>}/>
        </Route>
          <Route path="/:id" element={<Notfound/>}/>
      </Route>
    )
  );
  
  // router path

  // router path

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
