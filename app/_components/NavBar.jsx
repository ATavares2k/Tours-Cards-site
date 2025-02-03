import img from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="px-8 py-5">
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 justify-start">
              <Link className="flex flex-shrink-0 items-center" href="/">
                <Image
                  className="block h-12 w-auto"
                  src={img}
                  alt="websitelogo"
                />
              </Link>
            </div>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
              <Link
                className="text-gray-700 hover:text-[#2aaade] text-xl font-thin"
                href="/tours"
              >
                Tours
              </Link>
              <Link
                className="text-gray-700 hover:text-[#2aaade] text-xl font-thin"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-gray-700 hover:text-[#2aaade] text-xl font-thin"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
