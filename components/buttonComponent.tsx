"use client";

import React from "react";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

interface IButtonComponent {
  text: string;
}

export default function ButtonComponent({ text }: IButtonComponent) {
  return (
    <Link href="/dashboard">
      <Button className="gap-2 rounded-lg text-2xl font-light ">
        <GithubIcon className="fill-white" />
        {text}
      </Button>
    </Link>
  );
}
