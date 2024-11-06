import React, { useRef } from "react";
import { Captcha, useAccount } from "builderoo";

const LogIn: React.FC = () => {
  const userAccount = useAccount();
  // console.log("Captcha", Captcha);

  const { login, captchaRef } = useAccount();

  //   console.log("user account login", login);

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const loginClick = () => {
    // alert("submit successfully");

    console.log("log in click");

    console.log("console from log in emailRef", emailRef.current.value);
    console.log("console from log in passwordRef", passwordRef.current.value);

    if (emailRef.current && passwordRef.current) {
      // Ensure refs are not null
      login({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      })
        .then((data) => {
          // login successful, redirect to home or perform another action
          //   console.log("log in data", data);
          // alert("submit successfully");
          if (data) {
            console.log("log in successful", data); // Log successful login message with data
          }
          // console.log("log in successful");
        })
        .catch((e) => {
          console.error(
            "Login failed:",
            e?.data?.error || "An unknown error occurred."
          );
          // login error, display error message according to `e.data.error`
        });
    }
  };

  return (
    <section className="section text-center mt-10">
      <div className="container">
        <h3 className="mb-4">Login page</h3>
        <div className="form">
          <input
            type="email"
            ref={emailRef}
            placeholder="Input your email"
            className="p-2 border-2 rounded-full mr-4 text-center outline-none"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Input your password"
            className="p-2 border-2 rounded-full mr-4 text-center outline-none"
          />
        </div>
        <Captcha ref={captchaRef} />
        <button
          onClick={loginClick}
          className="py-2 px-4 bg-blue-500 mt-4 rounded-full"
        >
          Login Now
        </button>
      </div>
    </section>
  );
};

export default LogIn;
