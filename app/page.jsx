import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl text-[#294164]">
          Welcome to Our Website!
        </p>
        <p className="font-light text-[#2aaade] text-xl mt-2">
          Check Our Avaiable <span className="font-medium">Tours</span>, Have a{" "}
          <span className="font-medium ">Safe trip</span> on our Website!
        </p>
      </div>
      <div className="mt-5 font-thin  px-2 underline-offset-[6px] pb-2 pt-1 rounded-lg underline decoration-1 text-[#294164] text-[20px] drop-shadow-md bg-white ">
        <Link href="/tours">Check our Tours</Link>
      </div>
    </main>
  );
}
