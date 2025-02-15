import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFire,
    faDraftingCompass,
    faOilCan,
    faCogs,
    faMonument,
    faTruckMoving,
    faShieldAlt,
    faTools,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import './ServicesGrid.css';

const ServicesGrid = () => {
    const services = [
        {
            id: 1, title: 'Structural Welding', icon: faFire,
            desc: 'Welding for buildings, bridges, and frameworks.'
        },
        {
            id: 2, title: 'Custom Metal Fabrication', icon: faDraftingCompass,
            desc: 'Design and fabrication of metal structures and components.'
        },
        {
            id: 3, title: 'Pressure Pipe Welding', icon: faOilCan,
            desc: 'Welding for pipelines in oil, gas, water, and industrial applications.'
        },
        {
            id: 4, title: 'Concrete Work', icon: faBars,
            desc: 'Concrete slabs, bed, and pads for machines.'
        },
        {
            id: 5, title: 'Heavy Equipment Welding', icon: faCogs,
            desc: 'Welding repairs and reinforcements for construction and industrial machinery.'
        },
        {
            id: 6, title: 'Ornamental Ironwork', icon: faMonument,
            desc: 'Decorative metalwork for gates, railings, and furniture.'
        },
        {
            id: 7, title: 'Mobile Welding Services', icon: faTruckMoving,
            desc: 'On-site welding for emergency repairs and remote projects.'
        },
        {
            id: 8, title: 'Aluminum & Stainless Steel Welding', icon: faShieldAlt,
            desc: 'Specialized welding for non-ferrous metals and corrosion-resistant applications.'
        },
        {
            id: 9, title: 'Repair & Maintenance Welding', icon: faTools,
            desc: 'Fixing broken or worn metal parts for industrial and commercial equipment.'
        },
    ];

    return (
        <div className="services-grid">
            {services.map((service) => (
                <article key={service.id} className="service-card">
                    <div className="service-icon">
                        <FontAwesomeIcon icon={service.icon} size="2x" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                </article>
            ))}
        </div>
    );
};

export default ServicesGrid;