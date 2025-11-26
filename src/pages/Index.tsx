import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutSection";
import heroImage from "@/assets/hero-fpv.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Winter 2024
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-[hsl(var(--glow-end))] bg-clip-text text-transparent">
            Winter FPV Meetup
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground">24. Dezember 2024</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground">Unterwellenborn, Thüringen</span>
            </div>
          </div>

          <div className="mb-16">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Ticket sichern - 10€
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-lg"
            >
              Mehr erfahren
            </Button>
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Indoor-Fliegen, Technik-Talk und entspannte Winter-Atmosphäre in historischer Kulisse
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Event Details */}
      <EventDetails />

      {/* Location Section */}
      <LocationSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Winter FPV Meetup 2024 • Gasmaschinenzentrale Unterwellenborn</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
