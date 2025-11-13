import { useNavigate, useParams } from "react-router-dom"
import { useCart } from "../contexts/useCart";
import { products } from "../data/product";
import { useState } from "react";
import { categories } from "../lib/categories";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useSnackbar } from "notistack";
import type { ProductType } from "../lib/types";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CategoryPage() {
    const { slug } = useParams();
    const { addToCart } = useCart();

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const category = categories.find((c) => c.slug === slug);
    const filteredProducts = products.filter(
        (p) => p.category === category?.value
    );

    const [disabledId, setDisabledId] = useState<string | null>(null);

    const handleAddToCart = (product: ProductType) => {
        if (disabledId === product.id) return;

        setDisabledId(product.id);

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
        });

        enqueueSnackbar(`${product.name} added to cart!`, { variant: "success" });

        setTimeout(() => setDisabledId(null), 800);
    };

    return (
        <div className="min-h-screen bg-dummy-white px-6 pt-28">
            <button onClick={() => navigate(-1)} className=" text-black">
                <FaArrowLeftLong />
            </button>
            {filteredProducts.length === 0 ? (
                <div className="w-full min-h-screen place-content-center text-center">
                    <p className="">
                        Category not found
                    </p>
                </div>
            ) : (
                <div className="flex w-full gap-3">
                    <div className="flex flex-col p-6 gap-6 md:gap-11 md:w-4/6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="border-t flex flex-col md:flex-row"
                            >
                                <div className="border-r mt-7">
                                    <img
                                        src={`/${product.image}`}
                                        alt={product.name}
                                        className="min-w-56 md:h-48 object-contain rounded-xl mb-4"
                                    />
                                </div>
                                <div className="flex flex-col justify-between w-full">
                                    <div className="leading-none md:p-6">
                                        <h2 className="md:text-2xl font-semibold">{product.name}</h2>
                                        <p className="px-0.5">{product.category}</p>
                                    </div>
                                    <div className="md:px-2">
                                        <p className="font-semibold mt-5 md:px-6">
                                            Rp {product.price.toLocaleString("id-ID")}
                                        </p>
                                        <div className="flex justify-end gap-x-3 md:gap-x-12">
                                            <button
                                                onClick={() => navigate(`/products/${product.slug}`)}
                                                className="flex items-center gap-x-1 hover:-translate-y-1 transition transform ease-in-out duration-200"
                                            >
                                                <MdArrowOutward fill="#09A295" className="mt-1" size={20} />
                                                <p>view more</p>
                                            </button>
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                disabled={disabledId === product.id}
                                                className={`flex items-center gap-x-1 transition transform ease-in-out duration-200 ${disabledId === product.id
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : "hover:-translate-y-1"
                                                    }`}
                                            >
                                                <HiOutlinePlusCircle stroke="#09A295" className="mt-0.5" size={20} />
                                                {disabledId === product.id ? "Adding..." : "Add to Cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-2/6 hidden md:block fixed md:right-0">
                        <div className="flex justify-center">
                            <div className="md:w-[270px]">
                                <h1 className="pb-5 text-xl text-center md:text-4xl font-bold">
                                    {category?.label}
                                </h1>
                                <div className="w-full px-3">
                                    <div className="border-2 min-h-56 rounded">
                                        <h2 className="text-center font-semibold border-b bg-black/10 py-2">Categories</h2>
                                        <div className="flex flex-col py-3 gap-1">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.slug}
                                                    onClick={() => navigate(`/category/${cat.slug}`)}
                                                    className={`${cat.slug === slug ? 'font-bold' : 'font-normal'}`}
                                                >
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 mt-6">
                                    <input
                                        type="text"
                                        placeholder="Search product..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none placeholder:text-neutral-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};