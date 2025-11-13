export default function CategorySection() {
    return (
        <section id="category" className="w-full min-h-screen bg-dummy-white text-center place-content-center px-6">
            <div className="p-3">
                <p className="text-start text-4xl font-bold">Explore by Category</p>
            </div>
            <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-6 grid-rows-none md:grid-rows-10 min-h-screen my-16">
                <div className=" bg-red-400 col-span-1 md:col-span-2 row-span-1 md:row-span-3 col-start-auto md:col-start-1 row-start-auto md:row-start-2">1</div>
                <div className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1 bg-blue-400 col-span-1 row-span-1 col-start-auto row-start-auto">2</div>
                <div className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-3 bg-green-400 col-span-1 row-span-1 col-start-auto row-start-auto">3</div>
                <div className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-5 bg-yellow-400 col-span-1 row-span-1 col-start-auto row-start-auto">4</div>
                <div className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-7 bg-purple-400 col-span-1 row-span-1 col-start-auto row-start-auto">5</div>
                <div className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-5 bg-pink-400 col-span-1 row-span-1 col-start-auto row-start-auto">6</div>
                <div className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-7 bg-orange-400 col-span-1 row-span-1 col-start-auto row-start-auto">7</div>
                <div className="md:col-span-4 md:row-span-2 md:row-start-9 bg-cyan-400 col-span-1 row-span-1 col-start-auto row-start-auto">8</div>
                <div className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-9 bg-lime-400 col-span-1 row-span-1 col-start-auto row-start-auto">9</div>
            </div>
        </section>
    )
};