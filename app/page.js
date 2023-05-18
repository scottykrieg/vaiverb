import Header from "./components/header";
import Footer from "./components/footer";
import Anyone from "./components/anyone";
import WinHydra from "./components/winhydra";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <WinHydra />
      <Anyone />
      <Footer />
    </>
  );
}
