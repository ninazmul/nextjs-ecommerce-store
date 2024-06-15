"use client";

import useWixClient from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

export default function LoginPage() {
  const wixClient = useWixClient();
  const router = useRouter();

  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    router.push("/");
  }

  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Log in"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password,
          });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setMessage("Password reset email sent. Please check your e-mail.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken!
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong!");
          }
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 h-[calc(100vh-80px)] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 border-2 border-orange py-8 px-6 rounded-md shadow-gray-500 shadow-lg"
      >
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              className="ring-2 ring-orange rounded-md px-4 py-2"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="ring-2 ring-orange rounded-md px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">
              E-mail Verification Code
            </label>
            <input
              type="text"
              name="emailCode"
              placeholder="Verification Code"
              className="ring-2 ring-orange rounded-md px-4 py-2"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="ring-2 ring-orange rounded-md px-4 py-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm text-gray-500 hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="rounded-md ring-2 ring-orange hover:text-orange py-2 px-4 bg-orange hover:bg-white text-white font-semibold transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-orange/50 disabled:ring-orange/50 disabled:hover:text-orange/50"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm text-gray-500 hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have and account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm text-gray-500 hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Already have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm text-gray-500 hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Sign In
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
}
