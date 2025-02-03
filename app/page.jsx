import Image from "next/image";
import Link from "next/link";
import photo from "@/public/phtoo.jpg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src={photo}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover"
        alt="Mountains and forests with two cabins"
      />
      <div className="relative z-10 text-center">
        <p className="font-bold text-4xl text-[#294164]">
          Welcome to Our Website!
        </p>
        <p className="font-light text-[#ffff] text-xl mt-2">
          <span className="font-medium">Check</span> Our Avaiable
          <span className="font-medium"> Tours</span>, Have a
          <span className="font-medium "> Safe trip</span> on our Website!
        </p>
      </div>
      <div className="mt-5 font-thin  px-2  pb-2 pt-1 rounded-lg decoration-1 text-[#294164] text-[20px] drop-shadow-md bg-white ">
        <Link href="/tours">Check our Tours</Link>
      </div>
    </div>
  );
}
