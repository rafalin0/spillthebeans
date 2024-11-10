import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spill the Beans",
  description: "Coffee Beans Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Toaster />
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
