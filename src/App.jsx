import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    { id: 1, name: "Alice Johnson", level1: 50, level2: 70, level3: 90 },
    { id: 2, name: "Bob Smith", level1: 60, level2: 80, level3: 85 },
    { id: 3, name: "Charlie Brown", level1: 40, level2: 65, level3: 78 },
     { id: 4, name: "Charlie Brown", level1: 40, level2: 65, level3: 78 },
  ];

  const getMedal = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return index + 1;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white flex flex-col items-center py-10 px-4">
      
      {/* Animated Gradient Title */}
      <h1 className="text-6xl sm:text-8xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
        Cloudverse AWS JAM
      </h1>

      {/* Glassy Table Container */}
      <div className="mt-6 w-full max-w-[80vw] overflow-x-auto rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20">
        <table className="w-full text-center border-collapse rounded-3xl overflow-hidden text-xl sm:text-2xl">
          <thead>
            <tr className="bg-white/10 text-gray-200 uppercase tracking-wider">
              <th className="py-4 px-4 border-b border-white/20">Rank</th>
              <th className="py-4 px-4 border-b border-white/20">Name</th>
              <th className="py-4 px-4 border-b border-white/20">Level 1</th>
              <th className="py-4 px-4 border-b border-white/20">Level 2</th>
              <th className="py-4 px-4 border-b border-white/20">Level 3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? "bg-white/5" : "bg-white/0"
                } hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <td className="py-4 px-4 border-b border-white/10 font-bold">
                  {getMedal(index)}
                </td>
                <td className="py-4 px-4 border-b border-white/10">{row.name}</td>
                <td className="py-4 px-4 border-b border-white/10">{row.level1}</td>
                <td className="py-4 px-4 border-b border-white/10">{row.level2}</td>
                <td className="py-4 px-4 border-b border-white/10">{row.level3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
