import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let { newUser } = useParams();

  let navigate=useNavigate();

  let handleNavigate= ()=>{
    // useNavigate(); hook should not be called in function it shold be called inside functional component
    navigate("/")
  }
  return (
    <div>
      Login - {newUser}
      <button onClick={handleNavigate}>Move to Home</button>
    </div>
  );
};

export default Login;
