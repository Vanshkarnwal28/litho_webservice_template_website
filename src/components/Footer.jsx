import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-col">
            <a href="#" className="footer-logo">
              <span className="logo-icon"></span>
              LITHO
            </a>
          </div>
          
          <div className="footer-col footer-links">
            <a href="#about">About us</a>
            <a href="#services">Our services</a>
            <a href="#">Team</a>
            <a href="#contact">Contact us</a>
          </div>
          
          <div className="footer-col footer-copyright">
            <p>&copy; {new Date().getFullYear()} Litho is Proudly Powered by <a href="#" className="text-accent">ThemeZaa</a></p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
