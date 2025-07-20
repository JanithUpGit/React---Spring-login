import Button from "./Button";
import Input from "./Input";


export default function SigninSection(){

    return <>
    <div className="signin-container">
              <h2>WELCOME BACK</h2>
     
              <h4> Welcome back! Please enter your details.</h4>
                <Input label="Email" placeholder="Enter your email"/>
                <Input label="Password" placeholder="********"/>

                <div className="remember-forgot">
                    <div className="remember">
                        <input type="checkbox"/>
                        <label htmlFor="" >Remember me</label>
                    </div>
                    <p className="forgot"> <a>Forgot password</a></p>
                </div>
                <Button className="signin-btn">Sign in</Button>
                <Button className="google-btn">Sign in with google</Button>
            </div>
    
    </>;
}