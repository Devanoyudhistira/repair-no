import {Manrope } from "next/font/google";

const manrope = Manrope()

import "./globals.css";
export const metadata = {
  title: "repair-no",
  description: "repair website for devano",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.className} `}
    >
      <body className="bg-zinc-50">{children}</body>
    </html>
  );
}
