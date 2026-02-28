import Copy from "../_clientComponents/copy";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'আপনার সন্তান কে ভর্তি বা যেকোনো প্রয়োজনে এখান থেকে যোগাযোগ করুন'
};

const SchoolDetails = () => {
    const teacher = [
        {id:1,name: "মিলন",phone: "+8801712345678"},
        {id:2,name: "মাজিদুল",phone: "+8801887092375"},
        {id:3,name: "সবুজ",phone: "+8801976120283"}
    ]
    return(
        <main className="flex flex-col items-center h-screen bg-amber-100 gap-8 py-45">
            <div className="bg-white py-5 px-5 rounded-2xl border-2">
                <h1 className="text-xl text-blue-600 font-bold">সালহ উদ্দীন আহমেদ মিলন</h1>
                <h1 className="text-[12px] text-blue-600 font-bold mt-1">প্রতিষ্ঠাতা ও পরিচালক <span className="text-red-600 ml-2">{teacher.find(u => u.id === 1)?.phone}</span><Copy name={teacher.find(u => u.id === 1)?.name ?? ""} value={teacher.find(u => u.id === 1)?.phone ?? ""}/></h1>
            </div>

            <div className="bg-white py-5 px-5 rounded-2xl border-2">
                <h1 className="text-xl text-blue-600 font-bold">মোঃ মাজিদুল ইসলাম</h1>
                <h1 className="text-[12px] text-blue-600 font-bold mt-1">ইংলিশ শিক্ষক
                     <span className="text-red-600 ml-3">{teacher.find(u => u.id === 2)?.phone}</span><Copy name={teacher.find(u => u.id === 2)?.name ?? ""} value={teacher.find(u => u.id === 2)?.phone ?? ""}/></h1>
            </div>

            <div className="bg-white py-5 px-5 rounded-2xl border-2">
                <h1 className="text-xl text-blue-600 font-bold">মোঃ সবুজ মিয়া</h1>
                <h1 className="text-[12px] text-blue-600 font-bold mt-1">গণিত শিক্ষক <span className="text-red-600 ml-3">{teacher.find(u => u.id === 3)?.phone}</span><Copy name={teacher.find(u => u.id === 3)?.name ?? ""} value={teacher.find(u => u.id === 3)?.phone ?? ""}/></h1>
            </div>
        </main>
    )
}
export default SchoolDetails;