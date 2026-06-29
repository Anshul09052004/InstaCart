import Cart from "../Components/Cart";
import CategoryData from "../Components/CategoryData";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/NewsLetter";
import PopularProduct from "../Components/PopularProduct";


function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategoryData />
        <PopularProduct />
        <Newsletter />
        <Footer />
        <Cart />
      </main>
    </div>
  );
}

export default Home;