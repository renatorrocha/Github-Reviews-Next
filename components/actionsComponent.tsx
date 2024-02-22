import React from "react";
import { Separator } from "./ui/separator";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

interface IActionsComponent {
  name: string;
  total: number;
  href: string;
}

export default function ActionsComponent({
  name,
  total,
  href,
}: IActionsComponent) {
  return (
    <Link className="group" href={href}>
      <div className="flex items-center justify-between rounded-sm border border-gray-100 bg-white px-4 py-6 font-medium shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-100 group-hover:font-bold">
        <p>
          {name}: ({total})
        </p>

        <ExternalLinkIcon className="h-5 w-5 text-icons-purple" />
      </div>
    </Link>
  );
}
