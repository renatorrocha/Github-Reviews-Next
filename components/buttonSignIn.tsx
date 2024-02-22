"use client";

import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

export default function ButtonSignIn() {
  return (
    <Button
      onClick={() => signIn()}
      className="w-full min-w-64 gap-2 rounded-lg text-2xl font-light transition-all duration-300 hover:scale-105 "
    >
      <GithubIcon className="fill-white" />
      Login com Github
    </Button>
  );
}
