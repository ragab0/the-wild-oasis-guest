import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const josfin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Wild Oasis Guest App",
    default: "The Wild Oasis Guest App",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${josfin.className} antialiased min-h-screen flex flex-col [&>*]:px-3 [&>*]:py-3 [&>*]:lg:px-8 [&>*]:lg:py-5 relative`}
      >
        <Header />
        <div className="flex-1 grid">
          <main className="container mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
