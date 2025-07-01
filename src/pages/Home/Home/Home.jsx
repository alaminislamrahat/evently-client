import AboutUs from "../AboutUs/AboutUs";
import AllEvents from "../AllEvent/AllEvents";
import Hero from "../Hero/Hero";
import WhyChooseEvently from "../WhyChooseEvently/WhyChooseEvently";


const Home = () => {
    return (
        <div>
           <Hero/>
           <AboutUs/>
           <AllEvents/>
           <WhyChooseEvently/>
        </div>
    );
};

export default Home;