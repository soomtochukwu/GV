import { Footer } from "@/components/Footer/footer";
import RootLayout from "./layout";
import Header from "@/components/Header/header";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <p>Governator</p>
      <Footer />
    </RootLayout>
  );
}
