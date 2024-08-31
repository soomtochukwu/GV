import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Governstor dApp",
  description: "created by @TEAM_E ",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme={`dark `}>
      <body className="">{children}</body>
    </html>
  );
}
