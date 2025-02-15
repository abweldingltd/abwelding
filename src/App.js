import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ServicesGrid from './components/ServicesGrid';
import logo from './components/Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useState } from 'react';

import CG1 from './components/images/CG1.jpeg'
import CG2 from './components/images/CG2.jpeg'
import CG3 from './components/images/CG3.jpeg'
import CG4 from './components/images/CG4.jpeg'
import CG5 from './components/images/CG5.jpeg'
import CG6 from './components/images/CG6.jpeg'
import CG7 from './components/images/CG7.jpeg'
import CG8 from './components/images/CG8.jpeg'
import CG9 from './components/images/CG9.jpeg'
import CG10 from './components/images/CG10.jpeg'
import CG11 from './components/images/CG11.jpg'

import CR1 from './components/images/CR1.jpeg'
import CR2 from './components/images/CR2.jpeg'
import CR3 from './components/images/CR3.jpeg'
import CR4 from './components/images/CR4.jpeg'
import CR5 from './components/images/CR5.jpeg'
import CR6 from './components/images/CR6.jpeg'
import CR7 from './components/images/CR7.jpeg'
import CR8 from './components/images/CR8.JPG'
import CR9 from './components/images/CR9.PNG'
import CR10 from './components/images/CR10.PNG'

import CS1 from './components/images/CS1.jpeg'
import CS2 from './components/images/CS2.jpeg'
import CS3 from './components/images/CS3.jpeg'

import CSR1 from './components/images/CSafetyR1.jpeg'
import CSR2 from './components/images/CSafetyR2.jpeg'

import CWB1 from './components/images/CWB1.jpeg'
import CWB2 from './components/images/CWB2.jpeg'

import MetalFab1 from './components/images/MetalFab1.jpeg'
import MetalFab2 from './components/images/MetalFab2.jpeg'
import MetalFab3 from './components/images/MetalFab3.jpeg'
import MetalFab4 from './components/images/MetalFab4.jpeg'
import MetalFab5 from './components/images/MetalFab5.jpeg'
import MetalFab6 from './components/images/MetalFab6.jpeg'

import PressurePipe1 from './components/images/PressurePipe1.JPEG'
import PressurePipe2 from './components/images/PressurePipe2.JPEG'
import PressurePipe3 from './components/images/PressurePipe3.JPEG'
import PressurePipe4 from './components/images/PressurePipe4.JPEG'

import Concrete1 from './components/images/Concrete1.WEBP'
import Concrete2 from './components/images/Concrete2.WEBP'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <div className="MainBody">
        <div className="first_section">
          <span className="title">AB Welding Ltd</span>
          <span className="text">AB Welding Ltd is a family-owned professional certified welding business that has been delivering high-quality welding services for over 25 years. Founded by a father and now run alongside his son, we take pride in our craftsmanship, reliability, and commitment to excellence. Specializing in industrial, commercial, and custom fabrication, we ensure precision and durability in every weld. Whether it’s structural welding, repairs, or custom metalwork, trust AB Welding for expertise built on generations of experience.</span>
        </div>

        <div className="second_section" id="services">
          <ServicesGrid />
        </div>

        <div className="third_section" id="about_us">
          <div className="left_third_section">
            <div className="each_left_third_section">
              <div className="content_image">
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
              <div className="content">
                <span className='title'>Professional Engineers (If Needed)</span>
                <span className='text'><br/>We involve professional engineers for projects requiring specialized design or certification. Rely on us for expert guidance, compliance, and quality assurance.</span>
              </div>
            </div>
            <div className="each_left_third_section">
              <div className="content_image">
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
              <div className="content">
                <span className='title'>Structural Steel: CWB Certified Division 2</span>
                <span className='text'><br/>We’re CWB Certified Division 2, ensuring top-quality, code-compliant structural steel welding. Trust our precision, safety standards, and decades of industry experience.</span>
              </div>
            </div>
            <div className="each_left_third_section">
              <div className="content_image">
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
              <div className="content">
                <span className='title'>Call or Email for an Estimate (Winnipeg & Surrounding Areas)</span>
                <span className='text'><br/>Contact us for a free estimate in Winnipeg and beyond. Call +1 (204) 999-1900 or email ab.welding@hotmail.com—let’s bring your project to life.</span>
              </div>
            </div>
          </div>
          <div className="right_third_section">
            <div className="top_right_third_section">
              <span className='title'>No Project Too Big or Too Small</span>
            </div>
            <div className="bottom_right_third_section">
              <span className='text'>Our welding company is committed to delivering exceptional results designed around your specific needs. By blending industry-leading expertise with meticulous attention to detail, we ensure each phase of the project meets the highest standards. From initial planning to the final touches, our skilled professionals work seamlessly to provide efficient and remarkable outcomes.</span>
              <span className='text'>Whether you’re embarking on a residential remodel or a large-scale commercial build, our team offers comprehensive solutions every step of the way. We prioritize clear communication, streamlined processes, and uncompromising quality. Trust us to handle all aspects of your construction project, delivering superior craftsmanship and peace of mind from start to finish.</span>
            </div>
          </div>
        </div>

        <div className="fourth_section" id="our_work">
          <div className="work-section">
            <h2 className="work-title">Custom Gate (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(CG1)}>
                <img src={CG1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG2)}>
                <img src={CG2} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG3)}>
                <img src={CG3} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG4)}>
                <img src={CG4} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG5)}>
                <img src={CG5} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG6)}>
                <img src={CG6} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG7)}>
                <img src={CG7} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG8)}>
                <img src={CG8} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG9)}>
                <img src={CG9} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG10)}>
                <img src={CG10} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CG11)}>
                <img src={CG11} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Custom Railings (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(CR1)}>
                <img src={CR1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR2)}>
                <img src={CR2} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR3)}>
                <img src={CR3} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR4)}>
                <img src={CR4} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR5)}>
                <img src={CR5} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR6)}>
                <img src={CR6} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR7)}>
                <img src={CR7} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR8)}>
                <img src={CR8} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR9)}>
                <img src={CR9} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CR10)}>
                <img src={CR10} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Custom Stairs (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(CS1)}>
                <img src={CS1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CS2)}>
                <img src={CS2} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CS3)}>
                <img src={CS3} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Custom Safety Railings (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(CSR1)}>
                <img src={CSR1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CSR2)}>
                <img src={CSR2} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Custom Safety Window Bars (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(CWB1)}>
                <img src={CWB1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(CWB2)}>
                <img src={CWB2} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Custom Metal Fabrication</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(MetalFab1)}>
                <img src={MetalFab1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(MetalFab2)}>
                <img src={MetalFab2} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(MetalFab3)}>
                <img src={MetalFab3} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(MetalFab4)}>
                <img src={MetalFab4} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(MetalFab5)}>
                <img src={MetalFab5} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(MetalFab6)}>
                <img src={MetalFab6} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Pressure Pipe (Welding)</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(PressurePipe1)}>
                <img src={PressurePipe1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(PressurePipe2)}>
                <img src={PressurePipe2} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(PressurePipe3)}>
                <img src={PressurePipe3} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(PressurePipe4)}>
                <img src={PressurePipe4} />
              </button>
            </div>
          </div>

          <div className="work-section">
            <h2 className="work-title">Concrete</h2>
            <div className="work-grid">
              <button className="image-button" onClick={() => setSelectedImage(Concrete1)}>
                <img src={Concrete1} />
              </button>
              <button className="image-button" onClick={() => setSelectedImage(Concrete2)}>
                <img src={Concrete2} />
              </button>
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content">
                <button className="close-button" onClick={() => setSelectedImage(null)}>
                  &times;
                </button>
                <img src={selectedImage} alt="Expanded view" onClick={(e) => e.stopPropagation()} />
              </div>
            </div>
          )}
        </div>

      </div>
      <Footer id='contact_us' />
      <div className="FloatLeft">
        <div className="Phone">
          <a href="tel:+12049991900">
            <FontAwesomeIcon icon={faPhone} />
            <span className="phone-tooltip">Phone</span>
          </a>
        </div>
      </div>
      <FloatingWhatsApp phoneNumber='2048819527' accountName='AB Welding' avatar={logo} />
    </div>
  );
}

export default App;
