import React from "react";

const AvailableDealsIcon: React.FC = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="17" height="17" fill="url(#pattern0_43167_6116)" />
      <defs>
        <pattern
          id="pattern0_43167_6116"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_43167_6116" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_43167_6116"
          width="128"
          height="128"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AvailableDealsIcon;
