"use server";

import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./credentials";

export default async function isLoggedIn() {
  const data = await getServerSession(NEXT_AUTH);
  if (data) {
    return true;
  } else {
    return false;
  }
}
