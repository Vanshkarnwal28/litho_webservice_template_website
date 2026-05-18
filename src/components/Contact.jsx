import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Laptop } from 'lucide-react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only submission for now
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        
        {/* Contact Info Blocks */}
        <div className="contact-info-blocks">
          <div className="info-block">
            <div className="info-icon text-accent">
              <Mail size={32} />
            </div>
            <h3 className="info-title">How can we help you?</h3>
            <a href="mailto:hello@example.com" className="info-link">Send us an email</a>
          </div>
          
          <div className="info-block">
            <div className="info-icon text-accent">
              <Phone size={32} />
            </div>
            <h3 className="info-title">Feel free to get in touch?</h3>
            <a href="tel:+1234567890" className="info-link">Give us a call today</a>
          </div>
          
          <div className="info-block">
            <div className="info-icon text-accent">
              <Laptop size={32} />
            </div>
            <h3 className="info-title">Ready to request a quote?</h3>
            <a href="#services" className="info-link">Describe your project</a>
          </div>
        </div>

        {/* Contact Form Header */}
        <div className="contact-header text-center">
          <span className="subtitle text-secondary">Fill out the form and we'll be in touch soon!</span>
          <h2 className="title">How we can help you?</h2>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your name*" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your email address*" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your mobile" className="form-input" />
            </div>
            <div className="form-group form-group-full">
              <textarea placeholder="Your message" rows="4" className="form-input textarea"></textarea>
            </div>
            
            <div className="form-footer form-group-full">
              <div className="checkbox-group">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I accept the terms & conditions and I understand that my data will be hold securely in accordance with the <a href="#" className="privacy-link">privacy policy</a>.
                </label>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
