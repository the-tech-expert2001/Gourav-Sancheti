import { useEffect, useRef } from "react";
import "./TubesCursor.css";

export default function TubesCursor() {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let destroyed = false;

    async function init() {
      if (!canvasRef.current) return;

      // Dynamic import (CRITICAL)
      const module = await import(
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
      );

      if (destroyed) return;

      const TubesCursor = module.default;

      appRef.current = TubesCursor(canvasRef.current, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
          },
        },
      });
    }

    init();

    const handleClick = () => {
      if (!appRef.current) return;
      appRef.current.tubes.setColors(randomColors(3));
      appRef.current.tubes.setLightsColors(randomColors(4));
    };

    window.addEventListener("click", handleClick);

    return () => {
      destroyed = true;
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div id="app">
      <canvas ref={canvasRef} />

      <div className="hero">
        <h1>Tubes</h1>
        <h2>Cursor</h2>
      </div>
    </div>
  );
}

function randomColors(count) {
  return Array.from({ length: count }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );
}