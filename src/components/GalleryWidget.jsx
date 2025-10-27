import React, { useRef, useState } from "react";

export default function GalleryWidget() {
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);

  function handleAddImage(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newImgs = files.map((f) => {
      return { id: Math.random().toString(36).slice(2, 9), url: URL.createObjectURL(f), name: f.name };
    });
    setImages((prev) => [...prev, ...newImgs]);
    e.target.value = null;
  }

  function scrollLeft() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: -220, behavior: "smooth" });
  }
  function scrollRight() {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: 220, behavior: "smooth" });
  }

  return (
    <div className="widget gallery-widget">
      <div className="gallery-header">
        <div className="gallery-title">Gallery</div>

        <div className="gallery-controls">
          <label className="add-btn">
            + ADD IMAGE
            <input type="file" accept="image/*" multiple onChange={handleAddImage} />
          </label>

          <div className="arrow-btns">
            <button onClick={scrollLeft} aria-label="prev">◀</button>
            <button onClick={scrollRight} aria-label="next">▶</button>
          </div>
        </div>
      </div>

      <div className="thumbs" ref={containerRef}>
        {images.length === 0 ? (
          <div className="empty-note">No images yet. Click “+ ADD IMAGE” to add photos.</div>
        ) : (
          images.map((img) => (
            <div key={img.id} className="thumb">
              <img src={img.url} alt={img.name} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
