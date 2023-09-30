import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";
import { Value } from "sass";


function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();
  

  const attemptLogin = async () => {
    try {
      let email = (document.getElementById("email") as HTMLInputElement).value
      let password =   (document.getElementById("password") as HTMLInputElement).value
      // if(email === "admin@email.com"){
      //   if(password === "password"){
         
      //   }
      //   else{
      //     setMessage("invalid password");
      //   }
      // }
      // else{
      //   setMessage("Invalid email");
      // }
      console.log(email)
      console.log(password)
      const message = await login(email, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  


  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        
        <div id="Email Input"> 
        <label>Email: </label>
        <input type="text" id="email"></input><br></br>
        </div>
        <div id="Password Input">
        <label>Password:  </label>
        <input type="text" id="password"></input><br></br>
        </div>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}
  
export default Login;
