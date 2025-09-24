import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import SideNav from "./sideNav";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1 pt-[80px]">
        {/* Fixed Sidebar */}
        <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Scrollable Main Content */}
        <main
          className={`flex-1 overflow-y-auto h-[calc(100vh-80px)] md:p-10 p-4 md:ml-[280px] ${
            isSidebarOpen
              ? "opacity-50 pointer-events-none md:opacity-100 md:pointer-events-auto"
              : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
