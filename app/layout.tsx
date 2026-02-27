import "./globals.css";
import logo from '@/public/school-logo.png'
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "SUMA",
  description: "Best PWA App",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "PWA App"
  }
};
export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 w-full z-50">
          <div className="border-b-7 border-amber-500 bg-green-500 py-1 px-2 lg:px-15 lg:py-2"><Image src={logo} alt="School Logo" width={300}/></div>
          <div className="flex items-center pl-10 py-1 gap-7 lg:gap-50 bg-red-700 text-[13px] text-white">
            <Link className="hover:font-bold" href="/">Home</Link>
            <Link className="hover:font-bold" href="/schoolDetails">School-Details</Link>
            <Link className="hover:font-bold" href="/contact">Contact</Link>
          </div>
          <div className="flex items-center bg-blue-500">
            <h1 className="fa fa-microphone text-white py-2 pl-2 pr-5 rounded-r-2xl bg-fuchsia-500"></h1>
            <Marquee className="text-white font-bold" speed={50} direction="left">সন্তান আপনার দায়িত্ব আমাদের | আপনার সন্তান কে আমাদের হাতে তুলে দিন, পিটিয়ে লাল করে দিব! | সুলতান উদ্দীন মেমোরিয়াল একাডেমি .............Repeat............. </Marquee>
          </div>
        </nav>
        {children}
        <footer className="flex flex-col gap-2 bg-black text-white py-7 rounded-t-2xl">
          <div>
            <h1 className="text-center">প্রতিষ্ঠাতা : <span className="text-cyan-300 font-bold">সালাহ উদ্দীন আহমেদ মিলন</span></h1>
          </div>
          <div>
            <h1 className="text-center">© sultan-uddin-memorial-academy-2026</h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h1 className="fa fa-code"></h1>
            <h1>Developer : <span className='font-bold text-indigo-300'> Masum Software Lab</span></h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
