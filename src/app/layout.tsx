import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Component/HomePage/Header/Header";
import ReduxProvider from "./services/redux/provider";
import Footer from "./UI/Component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {/* <SearchInput /> */}
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
