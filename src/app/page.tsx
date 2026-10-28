import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";

export default async function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-black">
      <Suspense fallback={<p className="text-white"> 
        Carregando...
        </p>}>

        <LoginForm />
      </Suspense>
    </main>
  );
}
