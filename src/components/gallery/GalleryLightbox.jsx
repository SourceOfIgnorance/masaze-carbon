import React, {useState, useEffect} from "react";

export default function GalleryLightbox({images}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    console.log("GalleryLightbox mounted, attaching event listener");
    const handler = (e) => {
      console.log("Lightbox event received", e.detail);
      setIdx(e.detail.index);
      setOpen(true);
    };
    window.addEventListener("open-lightbox", handler);
    return () => window.removeEventListener("open-lightbox", handler);
  }, []);

  if (!open) return null;

  const prev = () => setIdx((idx - 1 + images.length) % images.length);
  const next = () => setIdx((idx + 1) % images.length);
  const close = () => setOpen(false);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <button className="absolute top-4 right-4 text-white text-3xl" onClick={close}>&times;</button>
        <button className="absolute left-4 text-white text-3xl" onClick={prev}>&lt;</button>
        <img
          src={images[idx].src}
          alt={images[idx].alt}
          className="max-h-[80vh] max-w-full rounded shadow-lg"
        />
        <button className="absolute right-4 text-white text-3xl" onClick={next}>&gt;</button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
          {idx + 1} / {images.length}
        </div>
      </div>
    </>
  );
}
