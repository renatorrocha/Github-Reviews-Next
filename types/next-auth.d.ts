// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    username?: string;
  }

  interface Profile {
    login: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    githubUsername?: string;
  }
}
