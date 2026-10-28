import React from 'react';
import { CheckCircle2, Award, Sparkles, Calendar } from 'lucide-react';
import { propertyData } from '../data/propertyData';

export const ProjectOverview = ({ onOpenEnquiry }) => {
  const { overview, projectInfo } = propertyData;

  return (
    <section className="section overview-section" id="overview">
      <div className="container">
        <div className="overview-grid">
          {/* Left Column: Architectural Visual */}
          <div className="overview-visual-col">
            <div className="visual-card primary-visual">
              <img
                src={overview.imagePrimary}
                alt={`${projectInfo.name} Architecture`}
                className="overview-img"
              />
              <div className="visual-badge-floating">
                <Award size={22} className="badge-icon text-gold" />
                <div>
                  <div className="badge-title">DTCP Approved Gated Community</div>
                  <div className="badge-subtitle">Sathy Main Road, 9 Saravanampatti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="overview-content-col">
            <div className="section-tag">
              {/* <Sparkles size={14} /> */}
              <span>{overview.subtitle}</span>
            </div>

            <h2 className="section-title">
              {overview.title}
            </h2>

            <p className="overview-lead">
              {overview.leadText}
            </p>

            {overview.paragraphs.slice(0, 2).map((p, idx) => (
              <p key={idx} className="overview-paragraph">
                {p}
              </p>
            ))}

            {/* Feature Highlights Grid */}
            {overview.highlightsList && overview.highlightsList.length > 0 && (
              <div className="overview-highlights-list">
                {overview.highlightsList.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-check">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="highlight-text">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="overview-action-buttons">
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenEnquiry}
              >
                <Calendar size={16} />
                <span>Enquiry Now</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
