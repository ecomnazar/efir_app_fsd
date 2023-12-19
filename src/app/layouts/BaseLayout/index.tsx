import { NavigationBar } from "@/widgets/NavigationBar";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <NavigationBar />
      <main className="w-[calc(100vw-310px)] h-screen overflow-y-auto ml-auto p-4 bg-cream">
        <Outlet />
      </main>
    </div>
  );
};
