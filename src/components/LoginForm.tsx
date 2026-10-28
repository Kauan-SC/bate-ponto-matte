"use client";

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";
import type { FormEvent } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

    async function login(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      await signIn("credentials", {
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
        callbackUrl: "/dashboard",
      });
    }

  return (
      <form onSubmit={login} className="bg-gray-300/4 backdrop-blur-md border border-white/30 p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
        <h2 className="font-bold text-xl mb-6 text-white"> Acessar Plataforma </h2>

        <input
        name="email"
        type="email"
        placeholder="E-mail"
        required
        className="input input-primary border border-white/15 text-lg mb-1 pl-2"
        />

        <input
        name="password"
        type="password"
        placeholder="Senha"
        required
        className="input input-primary border border-white/15 text-lg mb-4 pl-2"
        />

        <button 
        type="submit"
        className="btn btn-primary w-full text-white border border-black bg-blue-600"> 
          Acessar 
        </button>

        {error === "CredentialsSignIn" && (
          <div className="text-red-600"> 
          E-mail ou senha inválidos. 
          </div>
        )}
      </form>


  );
}
