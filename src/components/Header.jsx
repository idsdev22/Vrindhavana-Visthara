import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import logoImg from '../assets/logo.jpg';

export const Header = ({ onOpenEnquiry }) => {
  const { projectInfo } = propertyData;

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo & Title */}
        <div className="brand-logo-wrap">
          <img src={logoImg} alt={projectInfo.name} className="brand-logo-img" style={{ maxHeight: '48px', objectFit: 'contain' }} />
        </div>

        {/* Center DTCP Approval Badge */}
        <div className="header-badge-rera d-none-mobile">
          <ShieldCheck size={16} className="rera-icon" style={{ color: 'var(--primary-green)' }} />
          <span><strong>{projectInfo.approvalBadge || "APPROVED DTCP"}</strong> • Sathy Main Road, Saravanampatti</span>
        </div>

        {/* Right CTA Actions */}
        <div className="header-actions">
          <a
            href={`tel:${projectInfo.phone}`}
            className="header-phone-btn"
            title="Call Sales Team"
          >
            <PhoneCall size={16} style={{ color: 'var(--primary-green)' }} />
            <span className="d-none-mobile">{projectInfo.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={onOpenEnquiry}
            className="btn-header-cta"
            style={{ background: 'var(--primary-green)' }}
          >
            <span>Enquire Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};
