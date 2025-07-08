import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl">
        <Outlet />
      </main>
    </>
  );
}

export default App;
