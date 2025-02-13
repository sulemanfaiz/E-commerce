import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [showpassword, setshowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      newErrors.username = "Username cannot be empty";
    } else if (username.length < 8) {
      newErrors.username = "Username must be at least 8 characters long";
    } else if (!/[a-zA-Z]/.test(username)) {
      newErrors.username = "Username must contain at least one letter";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one digit.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="Sign-up">
      <form onSubmit={handleSubmit} className="input-fields">
        <input
          type="text"
          placeholder="Enter Username"
          className="input-name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {error.username && <p className="error">{error.username}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          className="input-email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {error.email && <p className="error">{error.email}</p>}

        <input
          type={showpassword ? "text" : "password"}
          placeholder="Enter your password"
          className="input-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FaEye onClick={() => setshowPassword(!showpassword)}></FaEye>
        {error.password && <p className="error">{error.password}</p>}

        <input
          type="password"
          placeholder="Confirm your Password"
          className="input-confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {error.confirmPassword && (
          <p className="error">{error.confirmPassword}</p>
        )}

        <button type="submit">Submit</button>
        {success && <p>Registration Successful!</p>}
      </form>
    </div>
  );
};

export default Signup;
