import AboutUs from "../AboutUs/AboutUs";
import AllEvents from "../AllEvent/AllEvents";
import BlogSection from "../BlogSection/BlogSection";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import ParallaxSection from "../ParallaxSection/ParallaxSection";
import Testimonial from "../Testimonial/Testimonial";
import WhyChooseEvently from "../WhyChooseEvently/WhyChooseEvently";


const Home = () => {
    return (
        <div>
           <Hero/>
           <AboutUs/>
           <AllEvents/>
           <ParallaxSection/>
           <WhyChooseEvently/>
           {/* <BlogSection/> */}
           <Testimonial/>
           <Contact/>
        </div>
    );
};

export default Home;