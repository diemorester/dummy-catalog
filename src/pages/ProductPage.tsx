import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product";
import { useCart } from "../contexts/useCart";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProductPage() {
    const { productSlug } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const product = products.find((p) => p.slug === productSlug);
    console.log("Slug param:", productSlug);
    console.log("Found product:", product);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen px-6 pt-28 pb-6">
            <button onClick={() => navigate(-1)} className="mb-4 text-black">
                <FaArrowLeftLong />
            </button>
            <div className="flex flex-col md:flex-row gap-6 pr-6">
                <img src={`/${product.image}`} alt={product.name} className="w-96 h-96 object-contain rounded-lg" />
                <div className="flex flex-col justify-between gap-7">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold mb-3">{product.name}</h1>
                        <p className="text-sm md:text-base px-1 text-gray-700">{product.description}</p>
                    </div>
                    <div className="flex justify-between md:px-3">
                        <p className="text-xl font-semibold mb-4">Rp {product.price.toLocaleString("id-ID")}</p>
                        <button
                            onClick={() =>
                                addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    category: product.category,
                                    image: product.image
                                })
                            }
                            className="px-6 py-2 bg-dummy-green/85 text-white rounded-lg hover:bg-dummy-green transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
