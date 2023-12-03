import "./pagenotfound.scss";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNot">
      <div className="box">
        <img src="images/notFound.png" alt="Page Not Found" />
        <div className="buttons">
          <NavLink to="/">Go Home Page</NavLink>
          <NavLink to="/signup">Reload Page</NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
