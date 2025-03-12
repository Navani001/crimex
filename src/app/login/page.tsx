

import GoogleSign from "@/component/auth/googleSign";
import SignIn from "@/component/auth/login";
import { SignOut } from "@/component/auth/signOut";
import { signIn } from "next-auth/react";



export default function LoginPage() {
    return <div><SignIn/><GoogleSign /><SignOut/></div>;
}
