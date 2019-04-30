import React from "react";

export default function Menu() {
  return (
    <svg
      width="78"
      height="59"
      viewBox="0 0 78 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="66"
        height="54"
        fill="black"
        fill-opacity="0"
        transform="translate(5)"
      />
      <g filter="url(#filter0_d)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62.5 39H5.49997V32.6666H62.5V39ZM62.5 23.1666H5.49997V16.8334H62.5V23.1666ZM5.49997 7.33337V1H62.5V7.33337H5.49997Z"
          fill="#FF0000"
          fill-opacity="0.8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.499969"
          y="1"
          width="77"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
          />
          <feOffset dx="5" dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}