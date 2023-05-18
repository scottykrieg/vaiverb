import Header from "./components/header";
import Footer from "./components/footer";
import Anyone from "./components/anyone";
import WinHydra from "./components/winhydra";
import Navbar from "./components/navbar";
import Explore from "./components/explore";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <WinHydra />
      <Explore />
      <Anyone />
      <Footer />
    </>
  );
}
