import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Component/Header/Header";
import ReduxProvider from "./services/redux/provider";
import Footer from "./UI/Component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    absolute:'Dunker Store - Everything you need',
    default: 'Dunker Store - Everything you need',
    template: '%s | Dunker Store',
  },
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
          {children}
        </ReduxProvider>

        <Footer />
      </body>
    </html>
  );
}
