"use client";
import AboutMla from "@/app/components/AboutMLA";
import AboutPage from "@/app/components/AboutPage";
import { Creations } from "@/app/components/Creations";
import Footer from "@/app/components/Footer";
import Objectives from "@/app/components/Objective";

 

function Page() {

  return (
   <main>
        <AboutPage />
        <AboutMla />
        <Objectives />
        <Creations />
        <Footer />
   </main>
  );
}

export default Page;