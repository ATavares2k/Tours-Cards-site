import Link from "next/link";

export default function Contact_Us() {
  return (
    <div className="flex mt-24 underline font-thin text-[#294164] text-3xl gap-24 justify-center">
      <Link href="/about">Behance</Link>
      <Link href="/about">Linkedin</Link>
      <Link href="/about">Facebook</Link>
      <Link href="/about">Telephone</Link>
      <Link href="/about">Email</Link>
    </div>
  );
}
