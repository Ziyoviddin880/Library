import "./signup.scss";
import { NavLink } from "react-router-dom";
function Signup() {
  return (
    <div className="sign-window">
      <div className="sign">
        <div className="sign-title">Sign Up</div>
        <div className="account">
          <img src="images/google.svg" alt="Google" />
          <span>Continue with Google</span>
        </div>
        <div className="account">
          <img src="images/facebook.svg" alt="Facebook" />
          <span>Continue with Google</span>
        </div>
        <div className="or-line">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <form>
          <label htmlFor="firstName">Your name</label> <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="userName">Your Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter your username"
          />
          <button>Button</button>
        </form>

        <div className="link">
          Already signed up?
          <NavLink to="/signin"> Go to sign in.</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
