import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ぱうる | ペットホテル・デイケア",
  description: "大切な家族を、安心してお預けください。愛情いっぱいのペットホテルです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
