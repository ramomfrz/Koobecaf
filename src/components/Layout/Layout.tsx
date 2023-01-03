import { Outlet } from "react-router-dom";

import { Leftbar } from "./Leftbar/Leftbar";
import { Navbar } from "./Navbar/Navbar";
import { Rightbar } from "./Rightbar/Rightbar";

export const Layout = (): JSX.Element => {
  return (
    <div className="flex h-screen w-screen flex-col p-2">
      <header className="h-16 w-full">
        <Navbar />
      </header>
      <main className="grid grow grid-cols-[1fr_3fr_1fr]">
        <aside>
          <Leftbar />
        </aside>
        <section>
          <Outlet />
        </section>
        <aside>
          <Rightbar />
        </aside>
      </main>
    </div>
  );
};
