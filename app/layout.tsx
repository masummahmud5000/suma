import "./globals.css";
import logo from '@/public/school-logo.png'
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <nav>
          <div className="border-b-7 border-amber-500 bg-green-500 py-1 px-2"><Image src={logo} alt="School Logo" width={300}/></div>
          <div className="flex items-center justify-center py-1 gap-7 bg-red-700 text-[13px] text-white ">
            <Link className="hover:font-bold" href="#">হোম</Link>
            <Link className="hover:font-bold" href="#">স্কুল-সম্পর্কে</Link>
            <Link className="hover:font-bold" href="#">যেসব-সুবিধা-আছে</Link>
            <Link className="hover:font-bold" href="#">যুগাযুগ</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
