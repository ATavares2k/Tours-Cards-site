import { Geist } from "next/font/google";
import "@/app/_styles/globals.css";
import NavBar from "./_components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "Tours - %s",
    default: "Tours",
  },
  description: "Beautiful Places ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-[#f8fafc].`}>
        <NavBar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
