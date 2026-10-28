import React from 'react';
import {
  Cross,
  MapPin,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Plane,
  Navigation,
  Compass,
  Mountain,
  Clock,
  ExternalLink,
  Car
} from 'lucide-react';
import { propertyData } from '../data/propertyData';

const iconMap = {
  Cross,
  MapPin,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Plane,
  Navigation,
  Compass,
  Mountain
};

export const NearbyConnectivity = ({ onOpenEnquiry }) => {
  const { nearbyLocations, projectInfo } = propertyData;
  const primeList = nearbyLocations.primeLocations || [];

  return (
    <section className="section nearby-section" id="location">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Prime Location Advantage</span>
          </div>
          <h2 className="section-title">
            Strategic Connectivity & <span className="text-gold">Prime Distances</span>
          </h2>
          <p className="section-description">
            {nearbyLocations.description}
          </p>
        </div>

        {/* Content Area: 9 Prime Destinations + Location Map Card */}
        <div className="nearby-grid-layout">
          {/* Left Column: 9 Prime Landmark Cards */}
          <div className="landmarks-column">
            <div className="landmarks-header">
              <div className="category-indicator">
                <Car size={20} className="indicator-icon text-gold" />
                <h3>9 Key Destinations from Site</h3>
              </div>
              <span className="landmarks-count">Sathy Main Road Corridor</span>
            </div>

            <div className="landmarks-cards-grid">
              {primeList.map((item) => {
                const IconComponent = iconMap[item.icon] || MapPin;
                return (
                  <div key={item.id} className="landmark-card animate-fade-in">
                    <div className="landmark-main-info">
                      <div className="landmark-icon-circle">
                        <IconComponent size={17} />
                      </div>
                      <div className="landmark-text-group">
                        <h4 className="landmark-name">{item.name}</h4>
                        <span className="landmark-badge">{item.landmark}</span>
                      </div>
                    </div>

                    <div className="landmark-metrics">
                      <div className="metric-badge distance-badge">
                        <MapPin size={13} />
                        <span>{item.distance}</span>
                      </div>
                      <div className="metric-badge time-badge">
                        <Clock size={13} />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Location Map & Advantages Card */}
          <div className="location-advantage-col">
            <div className="map-card-wrapper">
              <div className="map-frame-header">
                <div className="map-header-title">
                  <MapPin size={18} className="text-gold" />
                  <span>{projectInfo.name} Location</span>
                </div>
                <a
                  href={projectInfo.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-open-link"
                >
                  <span>Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="map-iframe-container">
                <iframe
                  title="Vrindhavana Visthara Location Map"
                  src={projectInfo.googleMapEmbed}
                  width="100%"
                  height="230"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="location-summary-box">
                <h4 className="summary-title">Highway Corridor Highlights</h4>
                <ul className="summary-list">
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>1 km</strong> to Kumaran Medical Center (2 Mins)</span>
                  </li>
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>Saravanampatti is just 2 Km</strong> from site (3 Mins)</span>
                  </li>
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>5 - 6 km</strong> to KGiSL Campus & CHIL SEZ (8 - 10 Mins)</span>
                  </li>
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>6 km</strong> to Prozone Mall (10 Mins)</span>
                  </li>
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>9 km</strong> to Coimbatore Airport (15 Mins)</span>
                  </li>
                  <li>
                    <span className="summary-dot"></span>
                    <span><strong>Direct Sathy Highway</strong> to Annur (19 km), Mettupalayam (40 km) & Ooty (90 km)</span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn-primary w-100"
                  onClick={onOpenEnquiry}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
