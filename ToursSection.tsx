import TourCard from "./TourCard";
import portlandImage from "@/assets/portland-tour.jpg";
import ochoRiosImage from "@/assets/ocho-rios-tour.jpg";
import montegoBayImage from "@/assets/montego-bay-tour.jpg";
import riverToursImage from "@/assets/river-tours.jpg";

const ToursSection = () => {
  const tours = [
    {
      title: "Blue Mountain Adventure",
      destination: "Kingston to Portland", 
      duration: "Full Day",
      groupSize: "Up to 8 people",
      price: "$120/person",
      image: portlandImage,
      description: "Explore Jamaica's famous Blue Mountains, visit coffee plantations, and enjoy breathtaking views.",
      highlights: [
        "Blue Mountain Peak hiking",
        "Coffee plantation tour & tasting", 
        "Traditional Jamaican lunch",
        "Scenic mountain drives"
      ]
    },
    {
      title: "Waterfall & Beach Experience",
      destination: "Kingston to Ocho Rios",
      duration: "Full Day", 
      groupSize: "Up to 10 people",
      price: "$100/person",
      image: ochoRiosImage,
      description: "Climb the famous Dunn's River Falls and relax on beautiful Caribbean beaches.",
      highlights: [
        "Dunn's River Falls climbing",
        "Beach time at Turtle Beach",
        "Shopping at Island Village",
        "Local jerk chicken lunch"
      ]
    },
    {
      title: "Paradise Beach Tour",
      destination: "Kingston to Montego Bay",
      duration: "Full Day",
      groupSize: "Up to 12 people", 
      price: "$110/person",
      image: montegoBayImage,
      description: "Experience the famous Seven Mile Beach and vibrant Montego Bay nightlife.",
      highlights: [
        "Seven Mile Beach access",
        "Hip Strip entertainment district",
        "Sunset catamaran cruise",
        "Authentic Jamaican dinner"
      ]
    },
    {
      title: "River Adventures",
      destination: "Jamaica's Natural Waters",
      duration: "Full Day",
      groupSize: "Up to 8 people",
      price: "$95/person",
      image: riverToursImage,
      description: "Explore Jamaica's pristine rivers and waterfalls, from the famous Dunn's River to hidden gems.",
      highlights: [
        "Dunn's River Falls climbing experience",
        "Nanny River natural pools & swimming",
        "Hope River bamboo rafting",
        "Riverside Jamaican lunch & culture"
      ]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Discover Jamaica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us on unforgettable journeys from Kingston to Jamaica's most spectacular destinations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
