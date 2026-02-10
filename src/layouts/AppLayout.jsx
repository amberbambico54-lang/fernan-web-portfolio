import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-20 lg:py-10 sm:py-10">
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
