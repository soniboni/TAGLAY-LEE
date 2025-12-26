import '../styles/Footer.css'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4>About</h4>
          <p>
            This website is developed by Sonya Lee as an output for the Taglay ng Alumni: An Alumni Mentorship Series.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: sonyalee@company.com</p>
          <p>Phone: 09**-***-****</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
           <div className="socials">
                <a
                href="https://www.linkedin.com/in/lee-sonya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <FaLinkedinIn />
                </a>

                <a
                href="https://www.instagram.com/leesonee_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                >
                <FaInstagram />
                </a>

                <a
                href="https://www.facebook.com/sonya.lee.5454/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                >
                <FaFacebookF />
                </a>
            </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Your Company Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer