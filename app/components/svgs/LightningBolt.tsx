import React from "react";

type LightningBoltProps = {
  className?: string;
  size: string;
  pathClassName?: string;
};

const LightningBolt = ({ className, size, pathClassName }: LightningBoltProps) => {
  return (
    <div className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 23 23"
        fill="none"
      >
        <path
          className={`${pathClassName}`}
          d="M12.9203 3.20188C12.9203 3.01955 12.8114 2.85485 12.6437 2.78343C12.4759 2.71201 12.2817 2.74767 12.1503 2.87405L10.5331 4.42906C8.12516 6.74436 6.09055 9.41877 4.50164 12.3571C4.46423 12.4232 4.44287 12.4995 4.44287 12.5809C4.44287 12.832 4.64649 13.0357 4.89767 13.0357H8.81803V19.5746C8.81803 19.7547 8.9243 19.9178 9.08905 19.9906C9.25379 20.0634 9.44595 20.0321 9.5791 19.9108L10.3027 19.2517C12.8357 16.9443 14.9852 14.2485 16.6708 11.2655L17.1184 10.4733C17.1979 10.3325 17.1967 10.1601 17.1152 10.0204C17.0337 9.88069 16.8841 9.7948 16.7224 9.7948H12.9203V3.20188Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default LightningBolt;
