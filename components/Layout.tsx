import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[10px]">
      <Head>
        <title>Spill the Beans</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="max-w-[1400px] m-auto w-100%">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
