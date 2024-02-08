import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session?.user?.email });

      if (session.user && sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile?.email });

        if (!userExists) {
          await User.create({
            name: profile?.name,
            email: profile?.email,
            username: profile?.name?.replace(" ", "-").toLowerCase(),
            image: profile?.picture,
          });
        }

        return true;
      } catch {
        console.log("Error checking if user exists");
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
