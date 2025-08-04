import "./globals.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Geist_Mono } from "next/font/google";

export const metadata = {
  title: "Albaly Challenge"
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} bg-gray-50`}
      >
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#f9fafb]">
                {children}
              </main>
            </div>
          </div>
      </body>
    </html>
  );
}
