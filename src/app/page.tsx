import Image from "next/image";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ContentSection from "./Components/ContentSection";
import Footer from "./Components/Footer";
import ContentSection2 from "./Components/ContentSection2";
import ContentSection3 from "./Components/ContentSection3";
import CryptoCreators from "./Components/CryptoCreators";
import CryptoDictionary from "./Components/CryptoDictionary";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Header />
      <main>
        <HeroSection />
        <ContentSection />
        <ContentSection2 />
        <ContentSection3 />
        <CryptoCreators />
        <CryptoDictionary  />
      </main>
      <Footer />
    </div>
  );
}
