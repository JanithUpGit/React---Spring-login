
import signinImg from '../assets/image.png'
import SigninSection from './SigninSection';

export default function Signin() {
  return (
    <>
      <div className="main-container">
        
        <SigninSection/>
        <img className="signin-image" src={signinImg}/>
        
          
      </div>
    </>
  );
}
