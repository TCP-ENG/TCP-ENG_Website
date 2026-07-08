import Link from "next/link";

// TCP ENG logo — clean wordmark, recolored by surface:
//   dark=true  -> placed on a LIGHT surface (navbar) -> navy wordmark  (/logo.png)
//   dark=false -> placed on a DARK surface (footer)  -> white wordmark (/logo-white.png)
//
// Source files in /public (trimmed, transparent PNG):
//   /public/logo.png        navy/grey "TCP ENG" wordmark
//   /public/logo-white.png  white "TCP ENG" wordmark
export default function Logo({ className = "", dark = false, height = 40 }) {
  const src = dark ? "/logo.png" : "/logo-white.png";
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
        height={height}
        style={{ height: `${height}px`, width: "auto" }}
        className="block"
      />
    </Link>
  );
}
