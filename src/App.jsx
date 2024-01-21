import Bennar from "./components/layouts/Bennar"
import Footer from "./components/layouts/Footer"
import HomeP from "./components/layouts/HomeP";
import ManP from "./components/layouts/ManP";
import Navber from "./components/layouts/Navber"
import WomanP from "./components/layouts/WomanP";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

function App() {
  
  // router path
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" 
        element={<HomeP/>} />

        <Route path="/Man" 
        element={<ManP/>} />

        <Route path="/Wo-man" 
        element={<WomanP/>} />
      </Route>
    )
  );
  // router path

  return (
    <>
      <Navber/>
      <Bennar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
