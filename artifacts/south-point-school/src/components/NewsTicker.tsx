import { useState, useEffect, useRef } from "react";

const tickerItems = [
  "🏆 South Point School bags State Championship in Inter-School Science Olympiad 2024",
  "📢 Admission forms for 2025-26 session now available — Apply before March 31",
  "🎭 Annual Cultural Festival 'Utsav 2024' to be held on December 20-22",
  "📚 CBSE Class XII Results: 98.6% pass rate, 12 students score 95%+ in all subjects",
  "🏅 Congratulations to our students selected for the National Science Talent Search",
  "⚽ South Point wins Zonal Football Tournament for the 3rd consecutive year",
  "🎓 Alumni Meet 2024 — Register at alumni@southpointschool.edu.in",
];

export default function NewsTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#6b4a10] text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="bg-gold text-[#1a1510] text-xs font-bold px-4 py-1 whitespace-nowrap shrink-0 uppercase tracking-wider z-10">
          Latest News
        </div>
        <div className="overflow-hidden flex-1 relative">
          <div
            ref={containerRef}
            className="flex whitespace-nowrap"
            style={{
              animation: "ticker 60s linear infinite",
            }}
          >
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-block px-8 text-sm opacity-95">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
