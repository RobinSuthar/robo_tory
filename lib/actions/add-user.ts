"use server";

import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./credentials";
import prisma from "@/database/datbase";

export default async function AddUser() {
  const data = await getServerSession(NEXT_AUTH);
  console.log(data.user);
  await prisma.user.create({
    data: {
      name: data.user.name,
      email: data.user.email,
    },
  });
}
