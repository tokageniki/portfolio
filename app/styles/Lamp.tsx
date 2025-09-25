// components/Lamp.tsx
"use client";

type LampProps = {
  onClick?: () => void;
  variant?: "antique" | "modern"; // 将来用
  top?: string;   // 例: "10vh"
  left?: string;  // 例: "50%"
  className?: string;
};

export default function Lamp({
  onClick,
  variant = "antique",
  top,
  left,
  className = "",
}: LampProps) {
  const style = { top, left } as React.CSSProperties;

  return (
    <button
      type="button"
      className={`lamp ${variant === "antique" ? "lamp--antique" : ""} ${className}`}
      style={style}
      onClick={onClick}
      aria-label="Enter / Next"
    >
      {/* 幾何学ケージ（ダイヤ形） */}
      <svg className="lamp__cage" viewBox="0 0 100 100" aria-hidden>
        <polygon points="50,5 90,35 50,95 10,35" />
        <line x1="50" y1="5"  x2="10" y2="35" />
        <line x1="50" y1="5"  x2="90" y2="35" />
        <line x1="10" y1="35" x2="50" y2="95" />
        <line x1="90" y1="35" x2="50" y2="95" />
        <line x1="20" y1="35" x2="80" y2="35" />
      </svg>

      <span className="lamp__cord" />
      <span className="lamp__socket" />
      <span className="lamp__bulb" />
      <span className="lamp__shade" />
      <span className="lamp__chain" />
      <span className="lamp__pull" />
      <span className="lamp__floor" />
      <span className="lamp__halo" />
    </button>
  );
}
