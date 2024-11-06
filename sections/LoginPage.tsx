import React, { useRef } from "react";
import { Captcha, useAccount } from "builderoo";

const LoginPage = () => {
  const { login, captchaRef } = useAccount();
  const emailRef = useRef();
  const passwordRef = useRef();

  console.log("console from log in emailRef", emailRef);
  console.log("console from log in passwordRef", passwordRef);

  const handleLogin = async () => {
    try {
      await login({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      });
      // Redirect or show success message
      console.log("log in successful");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <Captcha ref={captchaRef} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
