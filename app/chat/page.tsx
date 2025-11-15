"use client";
import Dashboard from "@/components/blocks/dashboard";

import { useSession } from "next-auth/react";

export default function Page() {
  const data = useSession();
  console.log("SERVER DAAT :  ", data);
  return (
    <div>
      <Dashboard />
    </div>
  );
}
