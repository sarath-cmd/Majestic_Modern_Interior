import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from './ui/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Majestic Modern Interior ",
  description: "Majestic Modern Interior Company offers exquisite and contemporary interior design solutions to elevate your living and working spaces. Built with Next.js, our website ensures a seamless and fast user experience, showcasing our premium design services and portfolio. Discover modern elegance with us.",
  keywords: "Modern Interior Design, Contemporary Interiors, Interior Design Solutions, Next.js, Premium Interior Design, Home Interiors, Office Interiors, Interior Decor, Interior Designers",
  name:"viewport",
  content:"width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
