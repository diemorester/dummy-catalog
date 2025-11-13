export default function HeroSection() {
    return (
        <section id="home" className="w-full h-screen relative bg-black text-center text-dummy-white place-content-center pt-20">
            <img
                src="/hero.webp"
                alt="Hero Image"
                loading="lazy"
                className="w-full h-screen object-cover"
            />
        </section>
    )
}