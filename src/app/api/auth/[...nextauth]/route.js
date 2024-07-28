import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { connectMongoose } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";
import { error } from "console";
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
            throw new Error("No user found");
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("Password is incorrect");
          }

          return user;
        } catch (error) {}
        return error ? null : { username };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
