import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Prague Party Cruise",
  description: "The #1 Boat Party in Prague",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <GoogleTagManager gtmId="GTM-P5DSX4XJ" />
      <body className="font-poppins">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
