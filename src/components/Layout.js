import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav"

export default function Layout({children}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
        <div className="text-center w-full">
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
    <div className="bg-blue-500 min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4">
        {children}
      </div>

    </div>
  );
}
