"use client";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
export function Login() {
  return (
    <div className="bg-transparent border-2 flex flex-col gap-5 backdrop-blur-md text-white rounded-[10px] px-14 py-14  border-[#ffffff33] shadow-[0_0_10px_rgba(255,255,255,0.2)]">
      <h1 className="text-4xl text-center">Login</h1>
        <input
          className="w-full h-full bg-transparent  outline-none border border-[#ffffff33] rounded-[40px] text-[16px] text-white p-5 "
          type="text"
          placeholder="username"
        />
        <input
          className="w-full h-full bg-transparent  outline-none border border-[#ffffff33] rounded-[40px] text-[16px] text-white p-5 "
          type="password"
          placeholder="Password"
        />
      <button
        type="submit"
        className="w-full py-3 bg-white border-none outline-none rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer text-[#333] font-semibold"
      >
        Log in
      </button>
      <button
        type="submit"
        className="w-full py-3 bg-white border-none outline-none rounded-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer text-[#333] flex items-center justify-center font-semibold"
      >
        <FcGoogle size={28} />
        Google Login
      </button>
    </div>
  );
}
