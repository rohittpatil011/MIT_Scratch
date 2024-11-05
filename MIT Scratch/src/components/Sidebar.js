import React from "react";
import Icon from "./Icon";
import MotionBlock from "./MotionBlock";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold">{"Motion"}</div>
      <MotionBlock type="move" label="Move" value={10} />
      <MotionBlock type="turn" label="Turn Left" value={15} icon="undo" />
      <MotionBlock type="turn" label="Turn Right" value={15} icon="redo" />
      <MotionBlock type="goto" label="Go to" x={50} y={50} />
    </div>
  );
}
