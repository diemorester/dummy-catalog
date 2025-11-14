import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="relative w-full h-screen overflow-hidden"
        >
            <img
                src="/hero.webp"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative h-full flex flex-col justify-center px-8 md:px-20">
                <h1 className="text-white text-4xl md:text-6xl font-bold max-w-lg leading-none drop-shadow-lg">
                    FIND YOUR<br />OWN SOUND
                </h1>

                <p className="text-white/90 px-1 pt-5 text-lg md:text-xl max-w-md leading-none drop-shadow-lg">
                    explore a curated selection of premium instruments.
                </p>

                <button
                    onClick={() => navigate('/category/electric-guitar')}
                    className="mt-8 w-fit bg-dummy-green text-black font-semibold px-6 py-3 mx-1 rounded-md text-lg md:text-xl hover:opacity-80 transition"
                >
                    SHOP NOW
                </button>
            </div>
        </section>
    );
}
