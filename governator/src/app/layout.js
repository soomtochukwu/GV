import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html data-theme='light'>
      <body className=" min-h-full">
        <main>{children}</main>
      </body>
    </html>
  );
}
