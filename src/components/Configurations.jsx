import React from 'react';
import { Layers, ArrowRight, Check, Sparkles, Ruler } from 'lucide-react';
import { propertyData } from '../data/propertyData';

export const Configurations = ({ onSelectPlot }) => {
  const { configurations } = propertyData;

  return (
    <section className="section config-section" id="configurations">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Villa Configurations</span>
          </div>
          <h2 className="section-title">
            Tailored Luxury For <span className="text-gold">Your Family</span>
          </h2>
          <p className="section-description">
            Choose from thoughtfully crafted 3 BHK (₹2 Cr & ₹2.5 Cr) and 4 BHK (from ₹3 Cr) luxury residential villas across 10 acres. <strong>All are built-up areas (not land area).</strong> Only 4BHK has double car parking.
          </p>
        </div>

        <div className="config-grid">
          {configurations.map((config) => (
            <div
              key={config.id}
              className={`config-card ${config.popular ? 'popular-card' : ''}`}
            >
              {config.popular && (
                <div className="popular-badge">
                  {/* <Sparkles size={12} /> */}
                  <span>PRE-LAUNCH PRIVILEGE</span>
                </div>
              )}

              <div className="config-header">
                <div className="config-cent-pill">{config.pill || config.cent || 'Built-Up Area'}</div>
                <h3 className="config-type-title">{config.type}</h3>
                <div className="config-sqft-text">
                  <Ruler size={14} />
                  <span>Built-Up Area: {config.dimension}</span>
                </div>
              </div>

              <div className="config-body">
                <div className="config-ideal">
                  <span className="ideal-label">Recommended Build:</span>
                  <p className="ideal-value">{config.idealFor}</p>
                </div>

                <div className="config-pricing-box">
                  <span className="price-title">Starting Price</span>
                  <span className="price-figure">{config.price}</span>
                </div>

                <div className="config-features-list">
                  {config.features.map((feat, idx) => (
                    <div key={idx} className="feature-row">
                      <Check size={14} className="feature-check text-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="config-footer">
                <button
                  type="button"
                  className={`btn-config-action ${config.popular ? 'btn-primary' : 'btn-outline'} w-100`}
                  onClick={() => onSelectPlot(config)}
                >
                  <span>Request Price Breakdown</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
