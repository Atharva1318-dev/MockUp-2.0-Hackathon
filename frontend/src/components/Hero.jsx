import React, { useState, useEffect } from 'react';
import { MousePointer2, ShoppingCart, Heart, Menu, ChevronRight, Truck, RotateCcw, Coins, HeadphonesIcon } from 'lucide-react';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Animated Background Grid */}
            <div
                className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_1px,transparent_1px)] bg-[length:30px_30px]"
                style={{
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
            />

            {/* Navigation */}
            <nav className="relative z-50 px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        NEXUS
                    </h1>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="#" className="hover:text-purple-500 transition-colors">Products</a>
                        <a href="#" className="hover:text-purple-500 transition-colors">Collections</a>
                        <a href="#" className="hover:text-purple-500 transition-colors">About</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative min-h-[80vh] flex items-center">
                <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                            Elevate Your
                            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Gaming Experience
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-lg">
                            Discover precision-engineered gaming gear that pushes the boundaries of performance and style. Welcome to the future of gaming.
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center space-x-2 hover:opacity-90 transition-opacity">
                                <span>Shop Collection</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
                        <img
                            src="https://images.unsplash.com/photo-1615645465258-d6566f45f6f4?auto=format&fit=crop&w=800&q=80"
                            alt="Gaming Mouse"
                            className="relative w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </main>

            {/* Features Grid */}
            <section className="relative z-10 bg-black/50 backdrop-blur-md py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Truck className="w-8 h-8 text-purple-500" />}
                            title="Free Shipping"
                            description="Free shipping on all orders over $100"
                        />
                        <FeatureCard
                            icon={<RotateCcw className="w-8 h-8 text-purple-500" />}
                            title="Easy Returns"
                            description="30-day hassle-free return policy"
                        />
                        <FeatureCard
                            icon={<Coins className="w-8 h-8 text-purple-500" />}
                            title="Best Prices"
                            description="Price match guarantee on all products"
                        />
                        <FeatureCard
                            icon={<HeadphonesIcon className="w-8 h-8 text-purple-500" />}
                            title="24/7 Support"
                            description="Expert support available around the clock"
                        />
                    </div>
                </div>
            </section>

            {/* Custom Cursor */}
            <div
                className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: mousePosition.x - 16,
                    top: mousePosition.y - 16,
                }}
            >
                <MousePointer2 className="w-full h-full text-white animate-pulse" />
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="p-6 border border-white/10 rounded-lg hover:border-purple-500/50 transition-color">
            <div className="flex items-center space-x-4">
                {icon}
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

export default Hero;