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
      <body
        className={`${geistSans.variable} antialiased  min-h-screen flex flex-col relative bg-[#f8fafc]`}
      >
        <NavBar />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
