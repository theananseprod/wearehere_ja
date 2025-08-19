import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Star, Users, Wifi, Car } from "lucide-react";

const AccommodationSection = () => {
  return (
    <section id="accommodation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Where to Stay
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfortable and authentic accommodations for your Jamaican adventure
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-tropical transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-tropical-gradient flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Paradise Villa</h3>
                    <p className="text-lg opacity-90">Your home away from home</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-primary">Authentic Jamaican Villa</CardTitle>
                    <div className="flex items-center text-accent">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="ml-1 font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Kingston, Jamaica</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beautiful 3-bedroom villa with stunning mountain views, authentic Jamaican 
                    architecture, and all modern amenities. Perfect base for your tour adventures.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      6 guests
                    </div>
                    <div className="flex items-center">
                      <Wifi className="w-4 h-4 mr-2 text-primary" />
                      Free WiFi
                    </div>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-2 text-primary" />
                      Free parking
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 text-primary">🏊</span>
                      Pool access
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">$150</span>
                        <span className="text-muted-foreground"> / night</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Special rates for tour guests
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button variant="tropical" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Airbnb
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contact Host
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
