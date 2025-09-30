"use client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full
                      bg-gradient-to-tr from-cyan-400/20 to-purple-400/20
                      blur-3xl animate-spin-slow"></div>
    </div>
  );
}