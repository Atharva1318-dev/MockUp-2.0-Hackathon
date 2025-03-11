import { Link } from "react-router-dom";
import { ArrowRight, Search, ShoppingBag, Grid } from "lucide-react"
import Hero from "./components/Hero";
import Story from "./components/Story";
import Categories from "./components/Categories";
import TopRated from "./components/TopRated";
import WeeklyDeals from "./components/WeeklyDeals";
import CustomerReviews from "./components/CustomerReviews";
import ProductCard from "./components/ProductCard";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";



export default function LandingPage() {
    return (
        <>
            <Hero></Hero>
            <Story></Story>
            <Categories></Categories>
            <TopRated></TopRated>
            <WeeklyDeals></WeeklyDeals>
            <CustomerReviews></CustomerReviews>
            <ProductCard></ProductCard>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </>
    )
}

