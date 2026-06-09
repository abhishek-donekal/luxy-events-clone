import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Luxury Event Planning & Catering",
  description:
    "Our event planning company has over 30 years of experience creating customized, high-end events for individuals & organizations. We turn your dreams into lasting memories.",
  openGraph: {
    type: "website",
    siteName: "Luxury Event Planning & Catering",
    title: "Luxury Event Planning & Catering",
    description:
      "Our event planning company has over 30 years of experience creating customized, high-end events for individuals & organizations.",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/LEPC%20JPG.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-white">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
