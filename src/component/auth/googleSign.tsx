"use client"
import { signIn } from "next-auth/react";
import React from "react";

function GoogleSign() {
    return (
        <button onClick={() => signIn("google",{redirectTo:"/"})}>Login with Google</button>
    );
}

export default GoogleSign;
