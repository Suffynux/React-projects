import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import UserContextProvider from "../Context/UserContext";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Login component that allows users to input a username and password.
 * It uses the UserContext to set the user state upon form submission.
 * The username and password are managed using local state.
 */

/******  f6cc463d-5bd0-4f07-93ed-64ca966afe30  *******/
function Login() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const HandleSubmit = (e) => {
    e.preventDefault()
    setUser({username, Password})
  };

  return (
    <>
      <div>
        <h2 className="">Login</h2>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          value={Password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={HandleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
