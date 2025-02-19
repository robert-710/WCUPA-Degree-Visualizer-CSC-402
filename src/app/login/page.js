"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary behavior: log the input and simulate a login
    console.log("Login submitted", { email, password });
    alert("Logged in (dummy functionality)");
    // Redirect to dashboard after "login"
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login - WCUPA Degree Visualizer</title>
        <meta name="description" content="Login to WCUPA Degree Visualizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#6e3061] p-4 flex justify-between items-center">
          <h1 className="text-white text-xl">Login</h1>
          <nav>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-8 bg-stone-50 text-black">
          <section className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded w-full p-2 mt-1"
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded w-full p-2 mt-1"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#6e3061] p-4 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} WCUPA Degree Visualizer. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
