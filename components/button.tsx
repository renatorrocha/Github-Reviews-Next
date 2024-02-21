"use client";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import React, { ComponentType } from "react";

interface IButton {
  text: string;
  Icon: LucideIcon;
}

export default function Button({ text, Icon }: IButton) {
  return (
    <button onClick={() => console.log("teste")}>
      {text} <Icon />
    </button>
  );
}
