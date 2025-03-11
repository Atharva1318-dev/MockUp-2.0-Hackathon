import React from "react";

const ShopByBrands = () => {
    const brands = [
        {
            id: 1,
            name: "Gaming Store",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-white",
        },
        {
            id: 2,
            name: "Wardiere Inc.",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-blue-400",
        },
        {
            id: 3,
            name: "Game Shop",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-orange-400",
        },
        {
            id: 4,
            name: "Game On",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-white",
        },
        {
            id: 5,
            name: "Borcelle",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-orange-500",
        },
        {
            id: 6,
            name: "Pixelpad",
            logo: "../src/assets/canva-modern-yellow-pixel-gamepad-studio-game-logo-WFVcImKH8mo-01.jpeg?height=50&width=120",
            className: "text-yellow-400",
        },
        {
            id: 7,
            name: "Hanover Gaming",
            logo: "../src/assets/5b8c77c26270c9df7e18b2b5c84a6223-01.jpeg?height=50&width=120",
            className: "text-red-500",
        },
        {
            id: 8,
            name: "Game Store",
            logo: "/placeholder.svg?height=50&width=120",
            className: "text-white",
        },
        {
            id: 9,
            name: "Gaming Gear",
            logo: "../src/assets/1e13b982595953.5d22d0dc7e827-01.jpeg?height=50&width=120",
            className: "text-orange-400",
        },
    ];

    return (
        <div className="w-full bg-card py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-white text-4xl font-bold tracking-wider uppercase">
                        SHOP BY
                    </h2>
                    <h2 className="text-white text-4xl font-bold tracking-wider uppercase mt-2">
                        POPULAR BRANDS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brands.slice(0, 5).map((brand) => (
                        <div
                            key={brand.id}
                            className="flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={`${brand.name} logo`}
                                    className="h-12 object-contain"
                                />
                                <span className={`text-sm mt-2 ${brand.className}`}>
                                    {brand.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {brands.slice(5).map((brand) => (
                        <div
                            key={brand.id}
                            className="flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={`${brand.name} logo`}
                                    className="h-12 object-contain"
                                />
                                <span className={`text-sm mt-2 ${brand.className}`}>
                                    {brand.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByBrands;
