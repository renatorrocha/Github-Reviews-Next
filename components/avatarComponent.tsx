"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";

export default function AvatarComponent() {
  const { data: session } = useSession();

  return (
    <Avatar className="h-28 w-28">
      <AvatarImage
        src={`https://github.com/${session?.user?.username}.png`}
        alt="Github pic"
      />
      <AvatarFallback>{session?.user?.username}</AvatarFallback>
    </Avatar>
  );
}
