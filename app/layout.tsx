import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Sidebar } from "@/components/common/Sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "인핸스 웹사이트",
  description: "인핸스 회사를 알리고, 서비스와 비전을 소개하며, 고객과의 소통을 위한 웹사이트입니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex", fontSans.variable)}>
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}