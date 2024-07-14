"use server";

import { z } from "zod";
import { comparePassword, hashPassword } from "./encrypt";
import prisma from "./db";
import { sign } from "hono/jwt";
import { cookies } from "next/headers";
const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .min(1, "email empty"),
  password: z
    .string({
      invalid_type_error: "password empty",
    })
    .min(1, "password empty"),
});

export async function login(prevState: any, formData: FormData) {
  const cookieStore = cookies();
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const dataUser = await prisma.user.findUnique({
    where: {
      email: validatedFields.data.email,
    },
  });
  if (!dataUser) {
    return {
      errors: {
        email: ["user not found"],
      },
    };
  }
  const samePassword: boolean = await comparePassword(
    dataUser.password,
    validatedFields.data.password
  );
  if (!samePassword) {
    return {
      errors: { password: ["password not same"] },
    };
  }
  const token = await sign(
    {
      uid: dataUser.uid,
      nama: dataUser.name,
      email: dataUser.email,
      exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
    },
    process.env.TOKEN_JWT as string
  );
  cookies().set({
    name: "Token",
    value: token,
    httpOnly: true,
    secure: true,
  });
  return {
    message: "berhasi;",
    errors: {
      email: [],
      password: [],
    },
  };
}

export async function changeLanguageAction(lang: string) {
  let langs = "en";
  if (lang == "id") {
    langs = "id";
  } else {
    langs = "en";
  }
  cookies().set({
    name: "LOCALE",
    value: langs,
    httpOnly: true,
    secure: true,
  });
}
