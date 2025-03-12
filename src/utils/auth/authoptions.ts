import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// types imports
import type { NextAuthConfig, Session } from "next-auth";


import { JWT } from "next-auth/jwt";

import GoogleProvider from "next-auth/providers/google";

import { postRequest } from "../axios/axios";

// Modify NextAuth types with custom properties


const authOptions = {
  providers: [ GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization:{
                      url: `https://accounts.google.com/o/oauth2/auth/authorize?response_type=code&prompt=login`
            },
            
          
  }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      authorize: async (credentials) => {
        try {
        
        let data:any=await postRequest("/api/auth/credential",{email:credentials.username,password:credentials.password})
        let user=data.data;
        user=data.data
          user.id=user.user.id
          user.logo = user.user.logo;
        user.name = user.user.name;
        user.email = user.user.email;
          return user ?user : null;
        } catch (error) {
          console.error("Error during authentication", error);
          return null;
        }
      },
    }),
   
  ],
  callbacks: {
    async signIn({ user, account, profile }:any) {
          if (account?.provider === "google") {
              try {
                console.log(user)
           const data:any= await postRequest("/api/auth/email",{email:user.email})
          console.log(data)
          user=data.data
          user.id=user.user.id
          user.logo = user.user.logo;
        user.name = user.user.name;
        user.email = user.user.email;
              // return true
            } catch (error) {
              console.error("Error during Google sign in:", error)
              return false
            }
          }
          console.log("user",user)
          return true
        },
    async jwt({ token, user }: { token: JWT; user: any }) {
      // Add the user properties to the token after signing in
      if (user) {
        console.log("token",token)
        token.id = user.id as string;
        token.logo = user.logo;
        token.name = user.name;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
    
    async session({ session, token }: { session: Session; token: JWT }) {
      // Create a user object with token properties
      const userObject: any = {
        id: token.id,
        avatar: token.avatar,
        name: token.name,
        accessToken: token.accessToken,
        email: token.email ? token.email : "", // Ensure email is not undefined
      };

      // Add the user object to the session
      session.user = userObject;

      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;


export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);