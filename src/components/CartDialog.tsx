import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { IoClose, IoAdd, IoRemove, IoCartOutline } from "react-icons/io5";
import { useCart } from "../contexts/useCart";

export default function CartDialog() {
    const [open, setOpen] = useState(false);
    const { cart, addToCart, removeFromCart, subtotal, totalQty } = useCart();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="relative" onClick={handleOpen}>
                <IoCartOutline
                    className="text-dummy-white hover:text-dummy-green active:scale-95 duration-500 transition-transform ease-in-out cursor-pointer" size={26}
                />
                {totalQty > 0 && (
                    <span
                        className="absolute right-0.5 -bottom-1 text-dummy-white bg-red-500 text-[8px] font-bold rounded-full py-px px-1"
                    >
                        {totalQty}
                    </span>
                )}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            height: '500px', // fixed tinggi
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '12px',
                        },
                    },
                }}
            >
                {/* HEADER */}
                <DialogTitle
                    sx={{
                        fontSize: '1.7rem',
                        fontWeight: '700',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #e0e0e0',
                        flexShrink: 0, // jangan sampai kena flex-grow
                        px: 3,
                        py: 2,
                    }}
                >
                    Your Cart
                    <IconButton onClick={handleClose}>
                        <IoClose fill="black" />
                    </IconButton>
                </DialogTitle>

                {/* ISI SCROLLABLE */}
                <DialogContent
                    sx={{
                        flex: 1,
                        overflowY: 'auto',
                        p: 3,
                        '&::-webkit-scrollbar': {
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#ccc',
                            borderRadius: '10px',
                        },
                    }}
                >
                    {cart.length === 0 ? (
                        <div className="text-center h-full flex place-content-center items-center text-gray-400">
                            Your cart is empty 🛍️
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 py-3">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center pb-3"
                                >
                                    <div className="flex items-center">
                                        
                                            <img
                                                src={`/${item.image}`}
                                                alt={item.name}
                                                className="w-16 h-16 pt-2 object-contain"
                                            />
                                        
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-xs text-gray-700">
                                                IDR {item.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="px-2 py-1 transition"
                                        >
                                            <IoRemove />
                                        </button>
                                        <div className="min-w-10 text-center px-2 py-1 bg-dummy-green/35 rounded">
                                            {item.qty}
                                        </div>
                                        <button
                                            onClick={() =>
                                                addToCart({
                                                    id: item.id,
                                                    name: item.name,
                                                    price: item.price,
                                                    category: item.category,
                                                    image: item.image
                                                })
                                            }
                                            className="px-2 py-1 transition"
                                        >
                                            <IoAdd />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </DialogContent>

                {/* FOOTER */}
                <div
                    className="flex justify-between items-center px-4 py-3 border-t border-gray-300"
                    style={{ flexShrink: 0 }}
                >
                    {cart.length > 0 ? (
                        <div className="w-full">
                            <div className="flex justify-between px-2">
                                <span className="font-bold text-lg text-black tracking-wider">
                                    TOTAL
                                </span>
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-black tracking-wide">
                                        Rp{subtotal.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-end py-2">
                                <button className=" px-4 py-2 rounded bg-dummy-green text-dummy-white hover:brightness-90">
                                    CHECK OUT
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full text-center">
                            <a href="#category" onClick={handleClose}>
                                <button className="rounded-lg px-1.5 text-sm md:text-base md:px-8 py-2 md:py-2.5 text-dummy-white bg-dummy-green hover:brightness-90">Add to Cart</button>
                            </a>
                        </div>
                    )}
                </div>
            </Dialog>
        </>
    );
}