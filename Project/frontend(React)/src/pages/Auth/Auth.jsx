import React, { useState } from "react";
import LoginForm from "./Signin/SigninForm";
import SignupForm from "./Signup/SignupForm";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden ">
      <div className="box  lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div class="front">
            <img
              class=""
              src="https://www.team-bhp.com/forum/attachments/motor-sports/1277102d1408778915-baja-sae-india-2012-team-conrods-10367746_691292864251461_3323130567599239096_n.jpg"
              alt=""
            />
            
          </div>
          <div class="back">
            <img
              src="https://kjssc.somaiya.edu.in/upload_file/images20/62b54f8d314ee.png"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full ">
            <div className="login-form ">
              <LoginForm togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <SignupForm togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
