import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold">Der Ort</h2>
        </div>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Gasmaschinenzentrale Unterwellenborn
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Unterwellenborn, Thüringen
          </p>

          <div className="prose prose-invert max-w-none">
            <p className="text-foreground leading-relaxed mb-4">
              Die historische Gasmaschinenzentrale ist ein einzigartiges Industriedenkmal 
              und bietet die perfekte Kulisse für unser Winter FPV Meetup. Das Gebäude 
              verbindet industrielle Geschichte mit moderner Technik-Kultur.
            </p>
            <p className="text-foreground leading-relaxed">
              Die weitläufigen Räumlichkeiten mit ihrer beeindruckenden Industriearchitektur 
              schaffen eine besondere Atmosphäre für Indoor-Flüge und bieten ausreichend 
              Platz für Austausch, Basteln und gemütliches Beisammensein.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LocationSection;
