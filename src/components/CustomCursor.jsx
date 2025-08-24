import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // detect when hovering over clickable elements
    const mouseOver = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setHovering(true);
      }
    };
    const mouseOut = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);
    window.addEventListener("mouseout", mouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
      window.removeEventListener("mouseout", mouseOut);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
      style={{
        width: hovering ? "40px" : "24px",
        height: hovering ? "40px" : "24px",
        background: hovering ? "rgba(130, 69, 236, 0.3)" : "#8245ec",
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        boxShadow: hovering
          ? "0 0 30px rgba(130, 69, 236, 0.9), 0 0 60px rgba(130, 69, 236, 0.7)"
          : "0 0 20px rgba(130, 69, 236, 0.8), 0 0 40px rgba(130, 69, 236, 0.6)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
