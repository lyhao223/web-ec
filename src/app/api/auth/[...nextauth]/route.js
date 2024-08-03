import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { connectMongoose } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          await connectMongoose();
          const user = await User.findOne({
            username,
          });

          if (!user) {
            throw new Error(
              JSON.stringify({ message: "No user found", status: 400 })
            );
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error(
              JSON.stringify({ message: "Password is incorrect", status: 400 })
            );
          }

          return user;
        } catch (error) {
          const err = JSON.parse(error.message);
          throw new Error(
            JSON.stringify({ message: err.message, status: err.status })
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
