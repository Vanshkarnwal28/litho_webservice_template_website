import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: 'BMW Experience',
    category: 'Branding',
    image: '/bmw.jpg',
    link: 'https://www.bmw.com',
    span: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Coca Cola',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.coca-cola.com',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Nike Air',
    category: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.nike.com',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Modern Architecture',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.architecturaldigest.com',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 5,
    title: 'Fashion Portrait',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.vogue.com',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    title: 'Watch Design',
    category: '3D Render',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.rolex.com',
    span: 'col-span-1 row-span-1'
  }
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.portfolio-item');
    
    gsap.fromTo(items, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="portfolio" className="section portfolio-section" ref={sectionRef}>
      <div className="container">
        <div className="portfolio-header text-center">
          <span className="subtitle text-accent">Recent Projects</span>
          <h2 className="title">Selected portfolio</h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <a 
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-item ${item.span}`}
            >
              <div className="portfolio-img-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
                <div className="portfolio-icon">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
