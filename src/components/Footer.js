import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Footer.css';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const Footer = () => {
    useEffect(() => {
        document.getElementById('year').textContent = new Date().getFullYear();
    }, []);

    // Replace these coordinates with your business location
    const position = [49.874092, -97.199524];

    return (
        <footer className="footer" id='contact_us'>
            <div className="footer-content">
                <div className="footer-section contact-section">
                    <h3>Get in Touch</h3>
                    <div className="contact-info">
                        <a href="mailto:info@abwelding.com" className="contact-link">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                            <span>ab.welding@hotmail.com</span>
                        </a>
                        <a href="tel:+12049991900" className="contact-link">
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                            <span>+1 (204) 999-1900</span>
                        </a>
                        <a href="tel:+12049305990" className="contact-link">
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
                            <span>+1 (204) 930-5990</span>
                        </a>
                        <div className="social-media">
                            <a href="https://www.facebook.com/p/AB-welding-100078314913180/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/ab.weldingltd/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Mailing Address</h3>
                    <div className="map-container">
                        <MapContainer
                            center={position}
                            zoom={15}
                            scrollWheelZoom={false}
                            className="leaflet-map"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    <strong>AB Welding LTD</strong><br />
                                    586 Academy Rd, Unit B<br />
                                    Winnipeg, MB R3N 0E5
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; <span id="year"></span> AB Welding LTD. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;