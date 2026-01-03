"use client";

import { useState, useEffect } from "react";

interface LightboxGalleryProps {
  images: string[];
  className?: string;
  ariaLabel?: string;
  altPrefix?: string;
}

const SWIPE_THRESHOLD = 50; // ระยะขั้นต่ำ (px) ที่ถือว่าเป็นการ swipe

const LightboxGallery = ({
  images,
  className = "",
  ariaLabel = "Project image gallery",
  altPrefix = "Project image",
}: LightboxGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 🔹 Keyboard: ESC + Arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  // 🔹 กัน scroll พื้นหลัง
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  // 🔹 Touch handlers สำหรับ swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null); // reset
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // ปัดซ้าย -> ไปขวา / รูปถัดไป
        showNext();
      } else {
        // ปัดขวา -> ไปซ้าย / รูปก่อนหน้า
        showPrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className={className}>
      {/* Thumbnail grid */}
      <div
        aria-label={ariaLabel}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {images.map((src, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
          >
            <img
              src={src}
              alt={`${altPrefix} #${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-neutral-100">
              {index + 1} / {images.length}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
        >
          <div
            className="relative mx-4 flex max-h-[90vh] max-w-[90vw] flex-col items-center"
          >
            {/* ปุ่มปิด */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-10 right-0 rounded-full border border-neutral-700 bg-black/70 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-800"
            >
              ✕ Close
            </button>

            {/* รูปหลัก + swipe handlers */}
            <div
              className="relative flex items-center justify-center touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* ปุ่มก่อนหน้า (desktop) */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-[-3rem] hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-neutral-100 hover:bg-black/80"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <img
                src={images[activeIndex]}
                alt={`${altPrefix} #${activeIndex + 1}`}
                className="max-h-[80vh] max-w-[80vw] rounded-2xl border border-neutral-700 bg-neutral-950 object-contain shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              />

              {/* ปุ่มถัดไป (desktop) */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-[-3rem] hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-neutral-100 hover:bg-black/80"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>

            <div className="mt-3 flex items-center gap-3 text-[11px] text-neutral-300">
              <span className="rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1">
                {activeIndex + 1} / {images.length}
              </span>
              <span className="hidden sm:inline text-neutral-500">
                ใช้ปุ่มลูกศรซ้าย/ขวาเพื่อเปลี่ยนรูป • กดปุ่ม Close เพื่อออก
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
