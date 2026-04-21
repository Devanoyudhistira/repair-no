import Image from "next/image";
import { Wrench } from "react-bootstrap-icons";
import Repaircard from "@/components/repairCard";

export default function Home() {
  return (
    <div className="" >
      <nav className="w-screen h-13 gap-4 flex px-4 items-center " >
        <span> <Wrench size={27} /> </span>
        <h1 className="text-2xl font-extrabold " > Repair-no </h1>
      </nav>
      <div className="w-full px-3 pb-6 py-3 flex flex-col gap-5" >
        <Repaircard image={"/image/hp1.jpg"} atasnama={"aziz"} namabarang={"iphone putih"} status={"pending"} />
        <Repaircard image={"/image/laptop2.jpg"} atasnama={"devano"} namabarang={"laptop hitam"} status={"selesai"} />
        <Repaircard image={"/image/laptop1.jpg"} atasnama={"ahmad"} namabarang={"laptop dell"} status={"progress"} />
      </div>
    </div>
  );
}
