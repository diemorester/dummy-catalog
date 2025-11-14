import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dummy-green text-dummy-white pt-16 pb-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">MARSH.</h2>
                    <p className="mt-5 text-sm text-dummy-white/80 leading-relaxed">
                        Premium quality products curated with care.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-12">
                        <a className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaInstagram size={18} />
                        </a>
                        <a className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaTwitter size={18} />
                        </a>
                        <a className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaTiktok size={18} />
                        </a>
                        <a className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>

                {/* Shop */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Shop</h3>
                    <ul className="space-y-3 text-sm text-dummy-white/85">
                        <li className="hover:text-white transition cursor-pointer">New Arrival</li>
                        <li className="hover:text-white transition cursor-pointer">Best Sellers</li>
                        <li className="hover:text-white transition cursor-pointer">Categories</li>
                        <li className="hover:text-white transition cursor-pointer">All Products</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Support</h3>
                    <ul className="space-y-3 text-sm text-dummy-white/85">
                        <li className="hover:text-white transition cursor-pointer">FAQ</li>
                        <li className="hover:text-white transition cursor-pointer">Shipping</li>
                        <li className="hover:text-white transition cursor-pointer">Returns</li>
                        <li className="hover:text-white transition cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm text-dummy-white/80 mb-5 leading-relaxed">
                        Subscribe to receive updates about new products & promotions.
                    </p>
                    <div className="flex items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-white/10 text-white placeholder-white/60 
                            px-3 py-3 rounded-lg focus:outline-none focus:ring-2 
                            focus:ring-white/40"
                        />
                        <button className="bg-white text-dummy-green font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition">
                            Go
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-14 border-t border-white/20 pt-6 text-center text-sm text-dummy-white/70">
                © {new Date().getFullYear()} MARSH. — All Rights Reserved.
            </div>
        </footer>
    );
}
