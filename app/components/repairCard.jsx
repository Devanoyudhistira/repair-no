"use client"
import Image from "next/image";
import { useState } from "react";

export default function Repaircard({ image, namabarang, atasnama, status }) {

    const [showupdate, setshowupdate] = useState(false)
    const [statustask,setStatus] = useState(status)

    function statuscolor() {
        if (statustask === "selesai") {
            return "bg-green-500"
        }
        else if (statustask === "progress") {
            return "bg-sky-300"
        }
        else {
            return "bg-yellow-500"
        }
    }

    return (
        <div className="w-full relative h-78 bg-gray-50 shadow-xs shadow-black flex flex-col rounded-2xl overflow-hidden" >
            <Image width={300} height={300} alt="picture" className="w-full h-50 object-center object-cover" src={image} />
            <div className="w-full px-3 justify-between flex " >
                <div className="flex flex-col  justify-center" >
                    <h1 className="text-xl font-bold tracking-wide" >{namabarang} </h1>
                    <h2 className="text-md font-medium " > 08-15-26 </h2>
                </div>
                <h1 className="text-xl font-bold " > {atasnama} </h1>
            </div>
            <div className={`${statuscolor()} rounded-full relative w-max ml-4 mt-4 px-2 py-1`}>
                <button onClick={() => setshowupdate(!showupdate)} className="text-md font-bold" > {statustask} </button>
            </div>
            {showupdate &&
                <div className="w-40 h-max gap-1 flex flex-col absolute bottom-14 rounded-xl left-6 -ml-1.5 bg-white shadow-xs shadow-black" >
                    <label htmlFor="progress" className="w-full hover:bg-sky-300 font-semibold text-xl" >
                        progress
                        <input onChange={(e) => setStatus(e.target.value)} hidden value="progress" type="radio" name="progress" id="progress" />
                    </label>
                    <label htmlFor="selesai" className="w-full hover:bg-green-500 font-semibold text-xl" >
                        <input onChange={(e) => setStatus(e.target.value)} hidden value="selesai" type="radio" name="selesai" id="selesai" />
                        selesai
                    </label>
                    <label htmlFor="pending" className="w-full hover:bg-yellow-500 font-semibold text-xl">
                        <input onChange={(e) => setStatus(e.target.value)} hidden value="pending" type="radio" name="pending" id="pending" />
                        pending
                    </label>
                </div>}
        </div>
    )
}