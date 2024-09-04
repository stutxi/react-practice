import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  const colors = [
    { name: "Red", color: "red" },
    { name: "Yellow", color: "yellow" },
    { name: "Black", color: "black", textColor: "white" },
    { name: "Purple", color: "purple" },
    { name: "Green", color: "green" },
    { name: "Blue", color: "blue" },
    { name: "Default", color: "coral", textColor: "black" },
  ];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-3 bg-white p-3 rounded-3xl shadow-lg">
          {colors.map(({ name, color, textColor }) => (
            <button
              key={name}
              onClick={() => setColor(name === "Default" ? "white" : color)}
              className="px-4 py-1 rounded-full shadow-lg"
              style={{
                backgroundColor: color,
                color: textColor || "black",
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;