import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout"; // Using the Layout component
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
