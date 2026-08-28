import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Restaurant from "@/components/Restaurant";
import Entertainment from "@/components/Entertainment";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/Service";
export default function Home() {
  return (
   <>
   <div className="">
 
     <Navbar/>
     <Hero/>
     <About/>
     {/* <Rooms/>
     <Restaurant/>   */}
     {/* <Entertainment/> */}
     {/* <Gallery/>
     <Contact/> */}
     <ServicesSection/>
     <Footer/>
          
   </div>
   
   
   </>
  );
}
