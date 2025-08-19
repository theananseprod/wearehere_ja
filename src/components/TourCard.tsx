import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

interface TourCardProps {
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
}

const TourCard = ({ 
  title, 
  destination, 
  duration, 
  groupSize, 
  price, 
  image, 
  description, 
  highlights 
}: TourCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-tropical transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={destination}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold text-sm">
          {price}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{destination}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-primary" />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-primary">Tour Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="tropical" className="w-full">
          Book This Tour
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
