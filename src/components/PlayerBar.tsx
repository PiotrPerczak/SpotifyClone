import React from "react";

const PlayerBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-neutral-950 flex items-center justify-between px-8 text-neutral-100 shadow-lg z-50">
      {/* Song info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-neutral-800 rounded-md" />
        <div>
          <div className="font-semibold">Song Title</div>
          <div className="text-neutral-400 text-sm">Artist Name</div>
        </div>
      </div>
      {/* Controls */}
      <div className="flex items-center gap-6">
        <button className="hover:text-green-400 transition-colors">⏮️</button>
        <button className="hover:text-green-400 transition-colors text-2xl">⏯️</button>
        <button className="hover:text-green-400 transition-colors">⏭️</button>
      </div>
      {/* Volume */}
      <div className="flex items-center gap-2">
        <span className="text-lg">🔊</span>
        <input type="range" min="0" max="100" className="w-24" />
      </div>
    </div>
  );
};

export default PlayerBar;
