'use client'
import { useState } from "react";

interface copyProps {
    value: string;
    name: string;
}

const Copy = ({name,value}:copyProps) => {

    const handleCopy = async() => {
        await navigator.clipboard.writeText(value)
        await alert(`${name}, স্যার এর নাম্বার কপি হয়েছে`);
    }

    return(
        <span onClick={handleCopy} className="fa fa-copy ml-2 cursor-pointer"></span>
    )
}
export default Copy;