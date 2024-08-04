import "./App.css";

import { NavBar } from "./compnents/nav-bar/NavBar.jsx";
import { Footer } from "./compnents/footer/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
