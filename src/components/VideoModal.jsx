import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoId = 'dQw4w9WgXcQ' }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, { opacity: 1, visibility: 'visible', duration: 0.4 });
      gsap.fromTo(contentRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.2, ease: "back.out(1.5)" }
      );
    } else {
      gsap.to(modalRef.current, { opacity: 0, visibility: 'hidden', duration: 0.4 });
    }
  }, [isOpen]);

  return (
    <div className="video-modal-overlay" ref={modalRef} onClick={onClose}>
      <div className="video-modal-content" ref={contentRef} onClick={e => e.stopPropagation()}>
        <button className="video-close-btn" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="video-responsive">
          {isOpen && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
