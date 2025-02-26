import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Global/Navbar";
import Footer from "@/components/blocks/Global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shree Shyam Camel and Jeep Safari",
  description: "Discover the Magic of Pushkar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shree Shyam Camel and Jeep Safari</title>
        <meta name="description" content="Discover the Magic of Pushkar" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
