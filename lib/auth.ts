/* eslint-disable react-hooks/rules-of-hooks */
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth, { getServerSession } from "next-auth/next";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const authConfig: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user, profile }) {
      user.username = profile && profile.login;

      return true;
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        token.githubUsername = user.username;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.username = token.githubUsername;

      return session;
    },
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
