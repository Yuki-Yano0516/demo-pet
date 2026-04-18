import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ぱうる | ペットホテル・デイケア",
  description: "大切な家族を、安心してお預けください。愛情いっぱいのペットホテルです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
