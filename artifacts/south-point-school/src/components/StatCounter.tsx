import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

function StatCard({ value, suffix = "", label, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-4xl font-bold text-gold count-up">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function StatCounter() {
  const stats: StatProps[] = [
    { value: 1960, suffix: "", label: "Year Established", icon: "🏫" },
    { value: 4500, suffix: "+", label: "Students Enrolled", icon: "🎓" },
    { value: 200, suffix: "+", label: "Expert Faculty", icon: "👨‍🏫" },
    { value: 60, suffix: "+", label: "Years of Excellence", icon: "⭐" },
    { value: 98, suffix: "%", label: "Board Pass Rate", icon: "📊" },
  ];

  return (
    <section className="bg-[#1a1510] py-14 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
