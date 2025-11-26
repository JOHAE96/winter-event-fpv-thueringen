import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2024-12-24T10:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 px-6 py-4 min-w-[80px] sm:min-w-[100px]">
        <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
      </Card>
      <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Tage" />
      <TimeUnit value={timeLeft.hours} label="Stunden" />
      <TimeUnit value={timeLeft.minutes} label="Minuten" />
      <TimeUnit value={timeLeft.seconds} label="Sekunden" />
    </div>
  );
};

export default Countdown;
