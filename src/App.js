import React from "react";
import AboutMeWidget from "./components/AboutMeWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function App() {
  return (
    <div className="app">
      {/* Left half intentionally empty (for laptop/responsive >768px) */}
      <div className="left-side" />

      {/* Right side with the two widgets stacked */}
      <div className="right-side">
        <AboutMeWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}
