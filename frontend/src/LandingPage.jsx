import { Link } from "react-router-dom";
import { ArrowRight, Search, ShoppingBag, Grid } from "lucide-react"
import Hero from "./components/Hero";
import Story from "./components/Story";
import Categories from "./components/Categories";
import TopRated from "./components/TopRated";
import WeeklyDeals from "./components/WeeklyDeals";
import ShopByBrands from "./components/ShopByBrands";
import CustomerReviews from "./components/CustomerReviews";
import ProductCard from "./components/ProductCard";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ScrollAnimationComponent from "./components/ScrollAnimationComponent.jsx";



export default function LandingPage() {
    return (
        <>
            {/* <Hero></Hero>
            <Story></Story>*/}
            {/* <Categories></Categories> */}
            <TopRated></TopRated>
            {/* <WeeklyDeals></WeeklyDeals> */}
            {/* <ShopByBrands></ShopByBrands>
            <CustomerReviews></CustomerReviews>
            <ProductCard></ProductCard>
            <CustomerReviews></CustomerReviews>
            <BlogSection></BlogSection>
            <Footer></Footer> */}
        </>
    )
}

