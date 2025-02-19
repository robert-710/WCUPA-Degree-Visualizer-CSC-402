"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup submitted", { email, password });
    alert("Signed up (dummy functionality)");
    // Redirect to login page after signup
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Signup - WCUPA Degree Visualizer</title>
        <meta name="description" content="Signup for WCUPA Degree Visualizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#6e3061] p-4 flex justify-between items-center">
          <h1 className="text-white text-xl">Signup</h1>
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
              <label>
                Confirm Password:
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border rounded w-full p-2 mt-1"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
              >
                Signup
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
