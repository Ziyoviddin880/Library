import "./signup.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const newData = {
      name,
      email,
      key: email,
      secret: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    fetch("https://0001.uz/signup", options)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("bu Email ro'yxatdan o'tkazilgan");
        }
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setUser([response]);
        navigate("/");
        setName("");
        setEmail("");
        setPassword("");
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
      });
  };

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
        <form onSubmit={register}>
          <label htmlFor="firstName">Your name</label> <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Your Email</label>
          {err && <h1>Bunday email ro'yxatdan o'tkazilgan</h1>}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Your Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button type="submit">Button</button>
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
