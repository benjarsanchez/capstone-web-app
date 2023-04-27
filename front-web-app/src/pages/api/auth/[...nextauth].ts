import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
        email: {
          label: "Email",
          type: "email",
        },
      },
      async authorize(credentials, req) {
        const { password, email } = credentials as any;
        // Request to backend API
        const res = await fetch("http://3.99.35.167/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
            email,
          }),
        });

        const token = await res.json();
        console.log({ token });

        if (res.ok) {
          const decodedToken = jwt.decode(token.jwt);
          const user = {
            name: decodedToken.id,
            id: decodedToken.id,
          };

          return user;
        } else return null;
      },
    }),
  ],
  secret: "secretKey",

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
