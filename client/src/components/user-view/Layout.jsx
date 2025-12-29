import { Outlet } from "react-router-dom";
import UserHeader from "./header";

function UserLayout() {
  return (
    <div className="flex-col flex bg-white overflow-hidden">
      {/*common Header */}

      <UserHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
