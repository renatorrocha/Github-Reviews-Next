"use client";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function ButtonSignOut() {
  return (
    <Button
      onClick={() => signOut()}
      className="w-full min-w-64 gap-2 rounded-lg text-2xl font-light transition-all duration-300 hover:scale-105 "
    >
      Logout
    </Button>
  );
}
