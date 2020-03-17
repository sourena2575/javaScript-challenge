import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [color, setcolor] = useState("#fff");
  const [show, setshow] = useState(false);
  return (
    <div>
      <button onClick={() => setshow(show => !show)}>
        {show ? "close" : "show"}
      </button>
      {show ? (
        <div>
          <ChromePicker
            color={color}
            onChange={updatedColor => {
              setcolor(updatedColor.hex);
            }}
          />
          <h2>color: {color}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
