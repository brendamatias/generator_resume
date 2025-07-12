import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
};

export { DefaultLayout };
