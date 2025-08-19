import { Button } from "@/components/ui/button";
import heroImage from "@/assets/jamaica-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-10 duration-1000">
          Discover
          <span className="bg-sunset-gradient bg-clip-text text-transparent"> Jamaica</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-10 duration-1000 delay-300">
          Experience the beauty, culture, and flavors of Jamaica with our curated tours, 
          comfortable accommodations, and authentic cuisine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore Tours
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            View Accommodations
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
