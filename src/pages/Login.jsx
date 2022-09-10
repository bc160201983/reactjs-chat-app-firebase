import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
const Login = () => {
  const [error, setError] = useState({ err: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError({ err: true, msg: error.message });
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Softnac Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
          {error.err && <span>{error.msg}</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
