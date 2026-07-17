import Link from "next/link";

// TCP ENG logo — clean wordmark, recolored by surface:
//   dark=true  -> placed on a LIGHT surface (navbar) -> navy wordmark  (/logo.png)
//   dark=false -> placed on a DARK surface (footer)  -> white wordmark (/logo-white.png)
//
// Source files in /public (trimmed, transparent WebP, ~2× display size):
//   /public/logo.webp        navy/grey "TCP ENG" wordmark
//   /public/logo-white.webp  white "TCP ENG" wordmark
export default function Logo({ className = "", dark = false, height = 40 }) {
  const src = dark ? "/logo.webp" : "/logo-white.webp";
  // Explicit width/height prevents layout shift (source aspect ratio 421:180).
  const width = Math.round((height * 421) / 180);
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="TCP ENG home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="TCP ENG"
        width={width}
        height={height}
        style={{ height: `${height}px`, width: `${width}px` }}
        className="block"
      />
    </Link>
  );
}
