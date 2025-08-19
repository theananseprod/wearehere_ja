import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tropical-gradient rounded-full"></div>
            <span className="text-xl font-bold text-primary">We are here JA</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Tours</a>
            <a href="#accommodation" className="text-foreground hover:text-primary transition-colors">Stay</a>
            <a href="#catering" className="text-foreground hover:text-primary transition-colors">Catering</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="hero" size="sm">Book Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors">Tours</a>
              <a href="#accommodation" className="text-foreground hover:text-primary transition-colors">Stay</a>
              <a href="#catering" className="text-foreground hover:text-primary transition-colors">Catering</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button variant="hero" size="sm" className="self-start">Book Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
