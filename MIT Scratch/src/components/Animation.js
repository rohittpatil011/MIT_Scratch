import React, { useState } from "react";
import { useDrop } from "react-dnd";

export default function AnimationArea() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  const [, drop] = useDrop(() => ({
    accept: "motion",
    drop: (item) => handleDrop(item),
  }));

  const handleDrop = (item) => {
    switch (item.type) {
      case "move":
        setPosition((prev) => ({ ...prev, x: prev.x + item.value }));
        break;
      case "turn":
        setAngle((prev) => prev + item.value);
        break;
      case "goto":
        setPosition({ x: item.x, y: item.y });
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={drop}
      className="animation-area"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div className="sprite">🚀</div>
      </div>
    </div>
  );
}
