import { Card } from "@/components/ui/card";
import { Wine, UtensilsCrossed, Sticker, Projector, Music, Camera, Radio } from "lucide-react";

const EventDetails = () => {
  const features = [
    { icon: Wine, label: "Glühwein", description: "Warmer Glühwein zum Aufwärmen" },
    { icon: UtensilsCrossed, label: "Bratwurst", description: "Leckere Bratwurst vor Ort" },
    { icon: Sticker, label: "Sticker", description: "Exklusive Event-Sticker" },
    { icon: Projector, label: "Beamer", description: "FPV-Feeds & Präsentationen" },
    { icon: Music, label: "Musik", description: "Atmosphärische Hintergrundmusik" },
  ];

  const notices = [
    { icon: Camera, text: "Es werden Foto- und Videoaufnahmen gemacht" },
    { icon: Radio, text: "Frequenzübersicht vor Ort zur Koordination" },
  ];

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Was erwartet dich?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.label}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-6 sm:p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">→</span> Wichtige Hinweise
          </h3>
          <div className="space-y-4">
            {notices.map((notice, index) => (
              <div key={index} className="flex items-start gap-3">
                <notice.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{notice.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
