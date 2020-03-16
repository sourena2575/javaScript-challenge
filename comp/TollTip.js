import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const TollTipContent = () => {
  return <span style={{ color: "red" }}>Colored</span>;
};

const TollTip = () => {
  return (
    <div className="jumbotron">
      <Tippy
        arrow={false}
        delay={1000}
        placement="left"
        content={<TollTipContent />}
      >
        <button>Hover</button>
      </Tippy>
    </div>
  );
};

export default TollTip;
