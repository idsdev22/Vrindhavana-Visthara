import React from 'react';
import {
  ShieldCheck,
  Milestone,
  Zap,
  Droplets,
  Trees,
  Trophy,
  Activity,
  Sun,
  Sparkles
} from 'lucide-react';
import { propertyData } from '../data/propertyData';

const iconMap = {
  ShieldCheck,
  Milestone,
  Zap,
  Droplets,
  Trees,
  Trophy,
  Activity,
  Sun
};

export const Amenities = () => {
  const { amenities } = propertyData;

  return (
    <section className="section amenities-section" id="amenities">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Community Features</span>
          </div>
          <h2 className="section-title">
            Signature <span className="text-gold">Gated Community</span> Amenities
          </h2>
          <p className="section-description">
            Experience curated lifestyle conveniences, sports facilities, and underground infrastructure designed for enduring comfort and safety.
          </p>
        </div>

        {/* 8 Signature Amenities in Symmetrical Grid */}
        <div className="amenities-icon-grid">
          {amenities.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.id || idx} className="amenity-icon-card">
                <div className="amenity-icon-box">
                  <IconComponent size={24} className="amenity-svg-icon" />
                </div>
                <div className="amenity-card-info">
                  <h4 className="amenity-card-text-title">{item.title}</h4>
                  {item.subtitle && <span className="amenity-card-subtitle">{item.subtitle}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
