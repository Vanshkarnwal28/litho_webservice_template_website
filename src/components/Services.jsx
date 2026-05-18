import { useEffect, useRef } from 'react';
import { Layout, ShoppingBag, Smartphone, MousePointer2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'Website design',
    icon: <Layout size={32} />,
    desc: 'Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore.',
  },
  {
    id: '02',
    title: 'eCommerce experience',
    icon: <ShoppingBag size={32} />,
    desc: 'Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore.',
  },
  {
    id: '03',
    title: 'Digital platform',
    icon: <Smartphone size={32} />,
    desc: 'Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore.',
  },
  {
    id: '04',
    title: 'Interface design',
    icon: <MousePointer2 size={32} />,
    desc: 'Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore.',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.service-card');
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="services" className="section services-section">
      <div className="container" ref={containerRef}>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <span className="service-id">{service.id}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-content">
                <p className="service-desc">{service.desc}</p>
                <a href="#contact" className="service-link">Explore Services</a>
              </div>
              <div className="service-icon">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
