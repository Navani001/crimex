import { GoogleSign, Login, SignIn, SignOut } from "@/component";

export default function LoginPage() {
  return (
    <div className=" h-screen justify-center items-center flex bg-cover bg-center bg-[url(https://cdn.pixabay.com/video/2019/10/10/27725-365890983_tiny.jpg)]">
      {/* <SignIn />
      <GoogleSign />
      <SignOut /> */}
      <Login/>
    </div>
  );
}
