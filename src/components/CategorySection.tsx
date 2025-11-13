import { useNavigate } from "react-router-dom"
import { products } from "../data/product";
import { categories } from "../lib/categories";

export default function CategorySection() {
    const navigate = useNavigate();

    const gridLayouts = [
        "col-span-1 md:col-span-2 row-span-1 md:row-span-3 md:col-start-1 md:row-start-2",
        "md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1",
        "md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-3",
        "md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-5",
        "md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-7",
        "md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-5",
        "md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-7",
        "md:col-span-4 md:row-span-2 md:row-start-9",
        "md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-9",
    ];

    const categoryImages = [
        "/category-section/electric-guitar.webp",
        "/category-section/drums.jpg",
        "/category-section/bass.webp",
        "/category-section/grand-piano.webp",
        "/category-section/keyboard.webp",
        "/category-section/acoustic-guitar.webp",
        "/category-section/microphone.webp",
        "/category-section/electric-drums.webp",
        "/category-section/accessories.webp",
    ];

    const availableCategory = categories.filter((cat) =>
        products.some((p) => p.category === cat.value)
    );

    return (
        <section
            id="category"
            className="relative w-full min-h-screen bg-dummy-white flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="absolute inset-0 " />

            <div className="z-10 w-full px-6 md:px-10 flex flex-col gap-10">
                <p className="text-start text-xl md:text-3xl font-bold tracking-tight text-gray-900 py-8 px-3 md:px-8">
                    Explore by Category
                </p>

                <div className="grid md:grid-cols-6 md:grid-rows-[repeat(10,minmax(0,13vh))] gap-3 scale-[0.96] origin-top drop-shadow-sm">
                    {availableCategory.map((cat, index) => (
                        <div
                            key={cat.value}
                            onClick={() => navigate(`/category/${cat.slug}`)}
                            className={`${gridLayouts[index]} aspect-square md:aspect-auto relative group cursor-pointer overflow-hidden rounded-2xl`}
                        >
                            <img
                                src={categoryImages[index]}
                                alt={cat.label}
                                loading="lazy"
                                className="object-cover w-full h-full brightness-95 contrast-105 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                            <p className="absolute bottom-4 left-4 text-dummy-white bg-dummy-green/70 group-hover:bg-dummy-green/90 px-3 py-2 rounded-xl text-lg md:text-xl font-semibold tracking-wide backdrop-blur-sm drop-shadow-lg">
                                {cat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};