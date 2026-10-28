import React from 'react';
import {
  Route,
  Trees,
  Waves,
  Dumbbell,
  Cctv,
  ShieldCheck,
  Droplets,
  Lightbulb,
  Grid3X3,
  BrickWall,
  PhoneCall,
  Footprints,
  Lamp,
  Sparkles
} from 'lucide-react';
import { propertyData } from '../data/propertyData';

const iconMap = {
  Route,
  Trees,
  Waves,
  Dumbbell,
  Cctv,
  ShieldCheck,
  Droplets,
  Lightbulb,
  Grid3X3,
  BrickWall,
  PhoneCall,
  Footprints,
  Lamp,
  Sparkles
};

export const Amenities = () => {
  const { amenities } = propertyData;
  const mainAmenities = amenities.slice(0, 12);
  const bottomAmenity = amenities[12] || null;

  return (
    <section className="section amenities-section" id="amenities">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            {/* <Sparkles size={14} /> */}
            <span>Community Amenities</span>
          </div>
          <h2 className="section-title">
            Signature <span className="text-gold">Lifestyle & Infrastructure</span>
          </h2>
          <p className="section-description">
            Thoughtfully planned community features, lush green spaces, and modern infrastructure designed for safety and elevated living.
          </p>
        </div>

        {/* Brochure-style Luxury Framed Showcase */}
        <div className="amenities-brochure-frame">
          <div className="amenities-brochure-grid">
            {mainAmenities.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div key={item.id || idx} className="amenity-brochure-item">
                  <div className="amenity-circle-icon">
                    <IconComponent size={30} strokeWidth={1.5} className="amenity-svg" />
                  </div>
                  <div className="amenity-item-text">
                    {item.subtitle ? (
                      <>
                        <span className="amenity-text-line1">{item.title}</span>
                        <span className="amenity-text-line2">{item.subtitle}</span>
                      </>
                    ) : (
                      <span className="amenity-text-single">{item.title}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {bottomAmenity && (
            <div className="amenity-bottom-row">
              <div className="amenity-divider-line"></div>
              <div className="amenity-bottom-content">
                <div className="amenity-circle-icon">
                  {(() => {
                    const BottomIcon = iconMap[bottomAmenity.icon] || Lamp;
                    return <BottomIcon size={30} strokeWidth={1.5} className="amenity-svg" />;
                  })()}
                </div>
                <span className="amenity-bottom-text">{bottomAmenity.text || bottomAmenity.title}</span>
              </div>
              <div className="amenity-divider-line"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
