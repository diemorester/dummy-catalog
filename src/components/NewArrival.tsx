import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { products } from "../data/product";
import { useNavigate } from "react-router-dom";

export default function NewArrival() {
    const navigate = useNavigate();

    return (
        <section id="new" className="px-6 py-10 md:px-10 md:py-20 bg-dummy-white">
            <p className="text-start text-xl md:text-3xl font-bold tracking-tight text-black py-8 px-3 md:px-8">
                New Arrival
            </p>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 }
                }}
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="absolute right-2 top-2 rounded-lg font-semibold bg-red-500 text-dummy-white px-2 py-1">NEW</div>
                        <div
                            onClick={() => navigate(`/products/${item.slug}`)}
                            className="bg-dummy-white border rounded-xl p-4 shadow-lg transition cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-contain rounded-lg overflow-hidden hover:scale-110 transition-transform ease-in-out duration-200"
                            />
                            <p>
                                {item.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}