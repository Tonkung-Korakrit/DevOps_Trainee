"use client";

import HTMLFlipBook from "react-pageflip";

interface FlipbookProps {
  images: string[];
  perPage?: number; // default: 3
  ariaLabel?: string;
}

const chunkImages = (arr: string[], size: number) => {
  const result: string[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const ProjectFlipbook = ({ images, perPage = 3, ariaLabel }: FlipbookProps) => {
  const pages = chunkImages(images, perPage);

  return (
    <div className="flex justify-center items-center mt-6">
      <HTMLFlipBook
        width={750}
        height={900}
        size="stretch"
        minWidth={300}
        maxWidth={800}
        minHeight={400}
        maxHeight={1200}
        usePortrait={true} // ⭐ ใช้โหมด Book ปกติ (แนวตั้ง)
        flippingTime={600}
        autoSize={true}
        className="rounded-xl shadow-xl"
        startPage={0}
        drawShadow={true}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        clickEventForward={true}
        aria-label={ariaLabel}
        // style={{}}
      >
        {pages.map((pageImages, pageIndex) => (
          <div
            key={pageIndex}
            className="bg-neutral-900 border border-neutral-800 flex items-center justify-center"
          >
            <div className="flex flex-col gap-4 p-6 w-full h-full">
              {pageImages.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 rounded-xl overflow-hidden flex items-center justify-center h-[250px] border border-neutral-800"
                >
                  <img
                    src={src}
                    alt={`page-${pageIndex}-img-${idx}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default ProjectFlipbook;

