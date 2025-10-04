import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);

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
      {/* Title */}
      <h1 className="text-6xl sm:text-8xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
        Cloudverse AWS JAM
      </h1>

      {/* Table Container */}
      <div className="mt-6 w-full max-w-[90vw] overflow-x-auto rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20">
        <table className="w-full text-center border-collapse text-lg sm:text-xl md:text-2xl">
          <thead>
            <tr className="bg-white/10 text-gray-200 uppercase tracking-wider">
              <th className="py-4 px-4 border-b border-white/20">Rank</th>
              <th className="py-4 px-4 border-b border-white/20">Name</th>
              <th className="py-4 px-4 border-b border-white/20">Level 1</th>
              <th className="py-4 px-4 border-b border-white/20">Level 2</th>
              <th className="py-4 px-4 border-b border-white/20">Level 3</th>
              <th className="py-4 px-4 border-b border-white/20">Level 4</th>
              <th className="py-4 px-4 border-b border-white/20">Level 5</th>
              <th className="py-4 px-4 border-b border-white/20">Level 6</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? "bg-white/5" : "bg-white/0"
                } hover:bg-white/20 transition-all`}
              >
                <td className="py-4 px-4 border-b border-white/10 font-bold">
                  {getMedal(index)}
                </td>
                <td className={`py-4 px-4 border-b border-white/10 font-medium ${
                  index > 10 ? "" : "blur-sm select-none text-white/50"
                }`}>
                  {row.name}
                </td>
                {[row.level1, row.level2, row.level3, row.level4, row.level5, row.level6].map((lvl, i) => (
                  <td key={i} className={`py-4 px-4 border-b border-white/10 ${
                    index > 10 ? "" : "blur-sm text-white/50"
                  }`}>
                    {lvl}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
