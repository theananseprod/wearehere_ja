import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ToursSection from "@/components/ToursSection";
import AccommodationSection from "@/components/AccommodationSection";
import CateringSection from "@/components/CateringSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ToursSection />
        <AccommodationSection />
        <CateringSection />
        <ContactSection />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-sunset-gradient rounded-full"></div>
                <span className="text-xl font-bold">We are here JA</span>
              </div>
              <p className="text-primary-foreground/80">
                Authentic Jamaican experiences from Kingston to paradise destinations.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#tours" className="hover:text-accent transition-colors">Tours</a></li>
                <li><a href="#accommodation" className="hover:text-accent transition-colors">Accommodation</a></li>
                <li><a href="#catering" className="hover:text-accent transition-colors">Catering</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+1 (876) 555-0123</li>
                <li>info@jamaicatours.com</li>
                <li>Kingston, Jamaica</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 relative">
            <p>&copy; 2024 We are here JA. All rights reserved. Experience the real Jamaica.</p>
            <div className="absolute bottom-0 right-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
