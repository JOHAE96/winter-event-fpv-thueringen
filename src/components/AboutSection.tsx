import { Card } from "@/components/ui/card";
import { Plane, Users, Wrench, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Plane,
      title: "Indoor-Fliegen",
      description: "Die perfekte Winter-Alternative für FPV-Piloten",
    },
    {
      icon: Users,
      title: "Community",
      description: "Austausch unter Gleichgesinnten",
    },
    {
      icon: Wrench,
      title: "Technik & Basteln",
      description: "Raum für Experimente und Reparaturen",
    },
    {
      icon: MessageCircle,
      title: "Entspannte Atmosphäre",
      description: "Spaß, Gespräche und spontanes Fliegen",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Über das Event
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Ein Treffpunkt für FPV-Enthusiasten, die ihr Hobby auch im Winter ausleben 
          und sich mit anderen Piloten austauschen möchten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            Egal ob Anfänger oder erfahrener Pilot – alle sind willkommen! 
            Bring deine Drohnen mit, tausche dich über Technik aus, oder genieß 
            einfach die entspannte Atmosphäre bei Glühwein und guten Gesprächen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
