import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface AvatarComponent {
  url: string;
  fallBack: string;
}

export default function AvatarComponent({ url, fallBack }: AvatarComponent) {
  return (
    <Avatar className="h-28 w-28">
      <AvatarImage src={url} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  );
}
