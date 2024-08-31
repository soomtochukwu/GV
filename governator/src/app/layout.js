import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html data-theme='light'>
      <body className=" min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
