import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience Jamaica? Contact us to book your adventure today!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-tropical">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (876) 555-0123</p>
                    <p className="text-sm text-muted-foreground">WhatsApp available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@jamaicatours.com</p>
                    <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Kingston, Jamaica</p>
                    <p className="text-sm text-muted-foreground">Island-wide service</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-muted-foreground">Daily: 7:00 AM - 8:00 PM</p>
                    <p className="text-sm text-muted-foreground">Emergency contact available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Quick Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Ready to book? Choose your preferred contact method and we'll respond quickly 
                  with availability and pricing.
                </p>
                
                <div className="space-y-3">
                  <Button variant="tropical" className="w-full justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button variant="hero" className="w-full justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button variant="sunset" className="w-full justify-center">
                    💬 WhatsApp Chat
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Why Choose Us?</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Local experts with 10+ years experience</li>
                    <li>• Small groups for personalized service</li>
                    <li>• Authentic cultural experiences</li>
                    <li>• All-inclusive packages available</li>
                    <li>• Safety-certified guides & vehicles</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
