import kuning1 from "../assets/kuning1.png";
import kuning2 from "../assets/kuning2.png";
import ungu1 from "../assets/ungu1.png";
import ungu2 from "../assets/ungu2.png";

// Maps the simple names used across the pages to the real imported assets.
const SOURCES = {
  kuning1,
  kuning2,
  ungu1,
  ungu2,
};

/**
 * DecorBlob
 * Renders one of the 4 brand decoration images (kuning1, kuning2, ungu1,
 * ungu2) as a purely decorative, non-interactive background shape.
 * Per spec, every decorative image in the app sits at 20% opacity.
 *
 * Usage:
 *   <DecorBlob name="kuning1" className="w-[601px] h-[613px] left-[881px] top-[133px] absolute" />
 */
export default function DecorBlob({ name, className = "", style = {} }) {
  const src = SOURCES[name];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`opacity-20 pointer-events-none select-none ${className}`}
      style={style}
    />
  );
}
