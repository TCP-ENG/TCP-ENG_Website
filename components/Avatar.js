"use client";

import { useEffect, useRef, useState } from "react";

// Headshot avatar. Renders /public/headshot.webp when present; if the file is
// missing it gracefully falls back to the SVG placeholder behind it.
export default function Avatar({ size = 220, className = "" }) {
  const [showPhoto, setShowPhoto] = useState(true);
  const imgRef = useRef(null);

  // The 404 error event can fire before React hydrates (missing it). On mount,
  // also check whether the image has already loaded as broken.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setShowPhoto(false);
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-full ring-4 ring-brand/20 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Placeholder (behind the photo; shown if the photo is missing) */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="avbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#16335c" />
            <stop offset="1" stopColor="#0a1628" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill="url(#avbg)" />
        <circle cx="100" cy="78" r="34" fill="#3b8aff" opacity="0.85" />
        <path d="M40 190c0-33 27-58 60-58s60 25 60 58z" fill="#3b8aff" opacity="0.85" />
      </svg>

      {showPhoto && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/headshot.webp"
          alt="Travis Priest"
          width={size}
          height={size}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center" }}
          onError={() => setShowPhoto(false)}
        />
      )}
    </div>
  );
}
