import Button from "./Button";
import Input from "./Input";
import googleImg from "../assets/google-logo.png";
import { useState } from "react";
import useHttp from "../hooks/useHttp";


export default function SigninSection() {

 const { data: response, loading, error } = useHttp(`http://localhost:8080/api`); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  function handleEmailChange(event){
    setFormData((prevFormData)=> {
        return{
            ...prevFormData,
            email:event.target.value
        }
    });
  }
  function handlePasswordChange(event){
    setFormData((prevFormData)=> {
        return{
            ...prevFormData,
            password:event.target.value
        }
    });
  }
  function handleRemeberChange(event){
    setFormData((prevFormData)=> {
        return{
            ...prevFormData,
            remember:event.target.checked
        }
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!!!");
  }


  return (
    <>
      <div className="signin-container">
        <form onSubmit={handleSubmit}>
          <h2>WELCOME BACK</h2>
          <h4> Welcome back! Please enter your details.</h4>
          <Input
            label="Email"
            placeholder="Enter your email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            required
          />
          <Input
            label="Password"
            placeholder="********"
            id="password"
            type="password"
            value={formData.password}
            onChange={handlePasswordChange}
            required
          />

          <div className="remember-forgot">
            <div className="remember">
              <input 
              type="checkbox" 
              id="remember"
              checked={formData.remember}
              onChange={handleRemeberChange}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p className="forgot">
              <a>Forgot password</a>
            </p>
          </div>
          <Button className="signin-btn">Sign in</Button>
          <Button className="google-btn">
            <img src={googleImg} />
            Sign in with google
          </Button>
        </form>
      </div>
    </>
  );
}
