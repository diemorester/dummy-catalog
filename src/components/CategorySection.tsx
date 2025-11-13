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
        "/category-section/electric-drums.webp",
        "/category-section/microphone.webp",
        "/category-section/accessories.webp",
    ];

    const availableCategory = categories.filter((cat) =>
        products.some((p) => p.category === cat.value)
    );

    return (
        <section id="category" className="w-full min-h-screen bg-dummy-white text-center place-content-center px-6">
            <div className="p-3">
                <p className="text-start text-4xl font-bold">Explore by Category</p>
            </div>
            <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-6 grid-rows-none md:grid-rows-10 min-h-screen my-16">
                {availableCategory.map((cat, index) => (
                    <div
                        key={cat.value}
                        onClick={() => navigate(`/category/${cat.slug}`)}
                        className={`${gridLayouts[index]} relative group cursor-pointer overflow-hidden rounded-xl`}
                    >
                        <img
                            src={categoryImages[index]}
                            alt={cat.label}
                            loading="lazy"
                            className="object-fill w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 overflow-hidden"
                        />
                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
                        <p className="absolute bottom-4 left-4 text-dummy-white bg-dummy-green opacity-65 group-hover:opacity-100 px-3 py-2 rounded-xl text-xl font-semibold tracking-wide drop-shadow-md">
                            {cat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
};