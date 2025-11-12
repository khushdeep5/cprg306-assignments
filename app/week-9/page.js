"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";


export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        {user ? (
          <div>
            <p>
              Welcome, <strong>{user.displayName}</strong> ({user.email})
            </p>
            <button
              onClick={handleSignOut}
              className="text-lg m-2 hover:underline bg-blue-500"
            >
              Logout
            </button>
            <br />
            <Link
              href="/week-9/shopping-list"
              className="text-lg m-2 hover:underline"
            >
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
         <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to the application</h1>
              <button
                onClick={handleSignIn}
                className="text-lg bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                >
                Login with GitHub
              </button>
</div>
        )}
      </div>
    </main>
  );
}