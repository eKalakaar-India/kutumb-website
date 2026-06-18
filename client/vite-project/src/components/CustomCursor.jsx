import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const haloRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });

  const dot = useRef({ x: 0, y: 0 });
  const halo = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let frame;

    const animate = () => {
      // Fast follower
      dot.current.x += (mouse.current.x - dot.current.x) * 0.45;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.45;

      // Slow follower = tracer
      halo.current.x += (mouse.current.x - halo.current.x) * 0.12;
      halo.current.y += (mouse.current.y - halo.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate(${dot.current.x}px, ${dot.current.y}px)
          translate(-50%, -50%)
        `;
      }

      if (haloRef.current) {
        haloRef.current.style.transform = `
          translate(${halo.current.x}px, ${halo.current.y}px)
          translate(-50%, -50%)
        `;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={haloRef} className="cursor-halo" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}