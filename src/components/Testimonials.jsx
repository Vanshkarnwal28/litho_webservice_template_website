import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "This theme has a wide variety of options and a really good customer support. Some of the customizations are unlimited but even so the theme still gives a lot of features while prioritizing web speed.",
    author: "Alexander",
    company: "Harvard",
    role: "Creative Director"
  },
  {
    id: 2,
    text: "An absolutely stunning experience from start to finish. The attention to detail in the animations and the overall aesthetic is precisely what we were looking for in a premium digital partner.",
    author: "Sarah",
    company: "Jenkins",
    role: "Marketing Head"
  },
  {
    id: 3,
    text: "Their work fundamentally transformed our online presence. The smooth scrolling and interactive elements keep our users engaged significantly longer than our previous site.",
    author: "Michael",
    company: "Chen",
    role: "CEO, TechFlow"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  useEffect(() => {
    // Animate text change
    gsap.fromTo(contentRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-content" ref={contentRef}>
          <p className="testimonial-text">
            {testimonials[currentIndex].text}
          </p>
          <div className="testimonial-author">
            <span className="author-name">{testimonials[currentIndex].author}</span>
            <span className="author-company text-accent">{testimonials[currentIndex].company}</span>
          </div>
          <div className="author-role">{testimonials[currentIndex].role}</div>
        </div>
        
        <div className="testimonial-controls">
          <button onClick={prevSlide} className="control-btn" aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>
          <div className="dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <button onClick={nextSlide} className="control-btn" aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
