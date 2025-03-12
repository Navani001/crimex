"use client"
import { signIn } from "next-auth/react";
import React from "react";

export function GoogleSign() {
    return (
        <button onClick={() => signIn("google",{redirectTo:"/"})}>Login with Google</button>
    );
}

