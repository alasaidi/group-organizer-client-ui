import "./nav-bar.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/member">member</Link>
        </li>
      </ul>{" "}
    </div>
  );
};
