import React from "react";
import { Captcha, useAccount } from "builderoo";

const SignUp: React.FC = () => {
  const { login, captchaRef, signup } = useAccount();

  // Handle the signup process when the button is clicked
  // const handleSignUp = () => {
  //   console.log("Sign up button clicked");

  //   signup({
  //     firstName: "John",
  //     lastName: "Doe",
  //     username: "email@example.com",
  //     password: "1234",
  //   })
  //     .then((data) => {
  //       console.log("data from sign up", data);

  //       if (data.status === "code-verification-required") {
  //         console.log("Verification code required", data);
  //       } else {
  //         console.log("Signup successful", data);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error("Signup error:", e);
  //     });
  // };

  const handleSignUp = async () => {
    console.log("Sign up button clicked");

    try {
      const data = await signup({
        firstName: "John",
        lastName: "Doe",
        username: "test@example.com",
        password: "123456",
      });

      console.log("data from sign up", data);

      if (data.status === "code-verification-required") {
        console.log("Verification code required", data);
      } else {
        console.log("Signup successful", data);
      }
    } catch (e) {
      console.error("Signup error:", e);

      if (e.response) {
        console.error("Error response data:", e.response.data);
        console.error("Error status:", e.response.status);
        console.error("Error headers:", e.response.headers);
      } else if (e.message) {
        console.error("Error message:", e.message);
      } else {
        console.error("Unexpected error:", JSON.stringify(e));
      }
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-10">Sign Up Page</h2>
      {/* Use captchaRef only if Captcha component supports ref */}
      <Captcha ref={captchaRef} />
      <button
        onClick={handleSignUp}
        className="bg-blue-400 text-white py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
