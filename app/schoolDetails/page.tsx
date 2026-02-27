const SchoolDetails = () => {
    return(
        <main className="flex flex-col items-center h-screen bg-amber-100 py-45">
            <h1 className="text-2xl text-blue-600 font-bold">স্কুল সম্পর্কে কিছু সাধারণ তথ্য</h1>
            <div className="text-3xl text-red-600">---------------------------</div>
            <div className="flex flex-col gap-7 text-fuchsia-600 font-bold px-11 pt-8">
                <p>১. প্রথমত আমাদের স্কুল থেকে যাতায়াতের জন্য গাড়ির ব্যবস্থা আছে (বাস + রেগুনা) গাড়ি।</p>
                <p>২. আমাদের এখানে দুটি ক্যাম্পাস রয়েছে, দ্বিতীয়টির নাম (বেগম রীনা মডেল একাডেমি)</p>
                <p>৩. এখানে ক্লাস রয়েছে, প্লে থেকে ১০ম শ্রেণি পর্যন্ত।</p>
                <p>৪. আমাদের স্কুলে বিভিন্ন অনুষ্ঠান অনুষ্ঠিত হয়েছে।</p>
            </div>
        </main>
    )
}
export default SchoolDetails;