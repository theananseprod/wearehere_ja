import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, MapPin, Utensils } from "lucide-react";
import foodTruckImage from "@/assets/food-truck.jpg";

const CateringSection = () => {
  const menuItems = [
    "Authentic Jerk Chicken & Pork",
    "Curry Goat with Rice & Peas", 
    "Ackee & Saltfish",
    "Festival & Fried Plantain",
    "Fresh Coconut Water",
    "Rum Punch & Traditional Drinks"
  ];

  return (
    <section id="catering" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Taste of Jamaica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Jamaican cuisine delivered fresh from our mobile kitchen
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="h-full shadow-warm">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-2">
                    Island Flavors Food Truck
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Bringing authentic Jamaican street food and traditional recipes 
                    directly to your event, beach party, or private gathering.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      <span>2-6 hours service</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-accent" />
                      <span>20-200 guests</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-accent" />
                      <span>Island-wide</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Utensils className="w-5 h-5 mr-2" />
                      Signature Menu
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {menuItems.map((item, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <span className="text-accent mr-2 font-bold">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-sunset-gradient/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">What's Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Professional chef & serving staff</li>
                      <li>• All cooking equipment & serving ware</li>
                      <li>• Setup & cleanup service</li>
                      <li>• Customizable menu options</li>
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">$25-40</span>
                        <span className="text-muted-foreground"> per person</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Minimum 20 guests
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button variant="sunset" className="flex-1">
                    Book Catering
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Custom Quote
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={foodTruckImage} 
                  alt="Island Flavors Food Truck"
                  className="w-full h-96 object-cover rounded-lg shadow-tropical"
                />
                <div className="absolute inset-0 bg-hero-gradient/20 rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Fresh • Authentic • Delicious</h3>
                  <p className="text-lg opacity-90">Island flavors on wheels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
