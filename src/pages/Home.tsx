import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NewArrival from "../components/NewArrival";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <NewArrival />
            <CategorySection />
            <Footer />
        </div>
    )
};