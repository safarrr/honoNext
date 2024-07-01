"use client";

import { useFormState } from "react-dom";
import { login } from "@/utility/action";

const initialState = {
  message: "",
  password: "",
  errors: {
    email: [],
    password: [],
  },
};

export default function Signin() {
  const [state, formAction] = useFormState(login, initialState);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <form
        action={formAction}
        className="flex flex-col rounded-lg w-1/4 mx-auto bg-black p-5 space-y-5"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="flex h-10 w-full text-black p-2 rounded-md"
          />
          {state.errors &&
          state.errors.email &&
          state.errors.email.length > 0 ? (
            <p className="text-red-500">{state.errors.email.join(" & ")}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="flex h-10 w-full text-black p-2 rounded-md"
          />
          {state.errors &&
          state.errors.password &&
          state.errors.password.length > 0 ? (
            <p className="text-red-500">{state.errors.password.join(" & ")}</p>
          ) : (
            ""
          )}
        </div>
        <p aria-live="polite" className="">
          {state?.message}
        </p>
        <button className="bg-white text-black py-2 rounded-full">
          Sign in
        </button>
      </form>
    </div>
  ); /*  */
}
