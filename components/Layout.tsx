import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[10px]">
      <header>
        <Navbar />
      </header>
      <main className="max-w-[1400px] mx-auto w-full">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
