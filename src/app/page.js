import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Localization from "./components/Localization";
import { Header } from "./components/Navbar";
import News from "./components/News";
import Partners from "./components/Partners";
import Powered from "./components/Powered";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Localization />
      <Partners />
      <News />
      <Powered />
      <Footer />
    </>
  );
}
