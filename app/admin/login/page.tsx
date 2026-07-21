"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const router = useRouter();

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });



  setLoading(false);

  if (error) {
    setError(error.message);
    return;
  }

    const {
    data: { session },
    } = await supabase.auth.getSession();

    console.log(session);
  
  // Redirect in the next step
  
  router.push("/admin/workshops");
};

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
        <form 
        onSubmit={handleSubmit} 
        className="mt-8 space-y-6">
        <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address
            </label>

            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
            />
        </div>

        <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
            </label>

            <input
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
            />
        </div>

        {error && (
        <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
            {error}
        </p>
        )}
        <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-3 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
        {loading ? "Signing In..." : "Sign In"}
        </button>
        </form>
      </div>
    </main>
  );
}