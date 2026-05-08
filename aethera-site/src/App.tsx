import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StartSection from "./components/StartSection";
import FeaturesChess from "./components/FeaturesChess";
import Work from "./components/Work";
import Journal from "./components/Journal";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <StartSection />
      <FeaturesChess />
      <Work />
      <Journal />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
