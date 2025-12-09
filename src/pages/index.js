import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="bg-blue-600 text-white p-2 px-4 rounded-lg"
          >
            Login with Facebook
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      Logged in as {session.user.name}
      <button
        onClick={() => signOut()}
        className="ml-4 bg-red-500 text-white p-2 px-4 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
