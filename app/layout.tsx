import "./globals.css";
import { Nunito } from "next/font/google";
import Modal from "./components/modals/Modal";

import Navbar from "./components/navbar/Navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen actionLabel="Submit" title={"Hello"} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
