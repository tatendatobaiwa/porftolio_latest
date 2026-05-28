'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
  { subject: 'Geometry', score: 100, fullMark: 100 },
  { subject: 'Astrodynamics', score: 90, fullMark: 100 },
  { subject: 'Deep Lrn', score: 99.5, fullMark: 100 },
  { subject: 'Algorithms', score: 95, fullMark: 100 },
  { subject: 'Systems', score: 85, fullMark: 100 },
  { subject: 'Optimization', score: 92, fullMark: 100 },
];

const RetroTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#05050A] border-2 border-[#00FF41] p-2 text-[#00FF41] text-xs font-bold shadow-[4px_4px_0px_#00FF41]">
        <p className="uppercase">{`${payload[0].payload.subject}`}</p>
        <p>{`LVL: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function RetroRadarChart() {
  return (
    <div className="w-full h-full min-h-[220px] font-mono pointer-events-auto">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#00FF41" strokeDasharray="3 3" opacity={0.5} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: 'white', fontSize: 10, fontWeight: 'bold' }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          <Tooltip content={<RetroTooltip />} />
          <Radar
            name="Skills"
            dataKey="score"
            stroke="#00FF41"
            strokeWidth={3}
            fill="#00FF41"
            fillOpacity={0.2}
            activeDot={{ r: 4, fill: "white", stroke: "#00FF41", strokeWidth: 2 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
