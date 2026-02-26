import '@/app/globals.css'
import homeImage from "@/public/home-image.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return(
    <main className="px-3 mt-35 py-7 h-screen bg-amber-100">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl pl-2 text-blue-500 font-bold">Welcome To, </h1>
        <h1 className="sName text-lg text-center font-bold bg-linear-to-b from-blue-700 to-emerald-600 py-1 px-2 rounded-xl text-white">Sultan Uddin Memorial Academy</h1>
      </div>
      <Image src={homeImage} alt="Home-Image" className="homeImage mt-6 w-full h-auto border-5 border-amber-600 rounded-3xl"/>
      <div className="flex flex-col items-center mt-7 bg- py-8 gap-5 rounded-2xl">
        <h1 className='text-lg text-fuchsia-500'>আজই আপনার সন্তানকে ভর্তি করে দিন</h1>
        <h1 className='text-3xl'>আমাদের স্কুল এ</h1>
        <Link href="#" className='animate-bounce border-3 border-amber-300 text-white bg-green-700 py-2 px-5 mt-10 rounded-xl'>ভর্তির জন্য যোগাযোগ করুন</Link>
      </div>
    </main>
  );
}
