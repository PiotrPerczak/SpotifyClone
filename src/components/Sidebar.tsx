import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed left-0 top-18 bottom-22 w-64 bg-neutral-900 text-neutral-100 flex rounded-md m flex-col p-6 space-y-6 shadow-lg"
      style={{ zIndex: 40 }}
    >
    
      <div className="font-bold text-lg">Your Library</div>
     
    </aside>
  );
};

export default Sidebar;
