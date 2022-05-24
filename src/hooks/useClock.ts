import { useEffect, useState } from "react";

type Clock = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const useClock = (): Clock => {
  const [clock, setClock] = useState<Clock>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      const d = new Date();
      setClock({
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
      });
    }, 500);
    return () => window.clearInterval(id);
  }, []);

  return clock;
};
