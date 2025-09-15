"use client";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { ButtonComponent } from "../button";
import { Button, Input, Card, CardBody } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { MdAdminPanelSettings, MdPeople, MdSecurity, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { HiShieldCheck, HiSparkles } from "react-icons/hi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const demoCredentials = [
    {
      type: "Admin",
      email: "admin@gmail.com",
      password: "admin",
      icon: <MdAdminPanelSettings className="text-white" size={24} />,
      bgGradient: "bg-gradient-to-br from-red-500 to-pink-600",
      hoverGradient: "hover:from-red-600 hover:to-pink-700"
    },
    {
      type: "People",
      email: "people@gmail.com", 
      password: "people",
      icon: <MdPeople className="text-white" size={24} />,
      bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      hoverGradient: "hover:from-blue-600 hover:to-indigo-700"
    },
    {
      type: "Police",
      email: "police@gmail.com",
      password: "police", 
      icon: <MdSecurity className="text-white" size={24} />,
      bgGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      hoverGradient: "hover:from-green-600 hover:to-emerald-700"
    }
  ];

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await signIn("credentials", {
        username: email,
        password,
        redirect: false,
      });
      
      if (response?.error) {
        alert("Login failed. Please check your credentials.");
      } else if (response?.ok) {
        window.location.href = "/";
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fillCredentials = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Demo Credentials Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <HiSparkles className="text-yellow-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Demo Access</h3>
              </div>
              
              <div className="space-y-4">
                {demoCredentials.map((cred, index) => (
                  <div
                    key={index}
                    className={`${cred.bgGradient} ${cred.hoverGradient} rounded-2xl p-5 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    onClick={() => fillCredentials(cred.email, cred.password)}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                        {cred.icon}
                      </div>
                      <span className="font-bold text-white text-lg">{cred.type} Access</span>
                    </div>
                    
                    <div className="text-white/90 text-sm space-y-1 ml-12">
                      <p><span className="font-medium opacity-80">Email:</span> {cred.email}</p>
                      <p><span className="font-medium opacity-80">Password:</span> {cred.password}</p>
                    </div>
                    
                    <div className="mt-3 ml-12">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white/90 backdrop-blur-sm">
                        Click to auto-fill
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HiShieldCheck className="text-red-500" size={40} />
                  <h1 className="text-4xl font-bold">
                    <span className="text-white">CRIME</span>
                    <span className="text-red-500 ml-2">X</span>
                  </h1>
                </div>
                <p className="text-white/70 text-lg">Secure Criminal Management System</p>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto mt-4"></div>
              </div>

              {/* Login Form */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      value={email}
                      onValueChange={(val) => setEmail(val)}
                      isRequired
                      placeholder="Enter your email address"
                      size="lg"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      classNames={{
                        input: "bg-transparent text-white placeholder:text-white/50",
                        inputWrapper: "bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 focus-within:bg-white/20 focus-within:border-white/40"
                      }}
                    />
                  </div>
                  
                  <div className="relative">
                    <Input
                      value={password}
                      onValueChange={(val) => setPassword(val)}
                      isRequired
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      classNames={{
                        input: "bg-transparent text-white placeholder:text-white/50",
                        inputWrapper: "bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 focus-within:bg-white/20 focus-within:border-white/40"
                      }}
                      endContent={
                        <button
                          className="text-white/60 hover:text-white transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                        </button>
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={handleLogin}
                  isLoading={isLoading}
                  disabled={!email || !password}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Logging in...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <HiShieldCheck size={20} />
                      Secure Login
                    </div>
                  )}
                </Button>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span className="mx-6 text-white/60 font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    OR CONTINUE WITH
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Google Sign In */}
                <ButtonComponent
                  buttonIcon={<FcGoogle size={24} />}
                  handleOnClick={() =>
                    signIn("google", { redirectTo: "/" }).then((response) => {
                      console.log("Google sign in response", response);
                    })
                  }
                  buttonText="Continue with Google"
                  baseClassName="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                />
              </div>

              {/* Footer */}
              <div className="text-center mt-8">
                <p className="text-white/50 text-sm">
                  Protected by enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;