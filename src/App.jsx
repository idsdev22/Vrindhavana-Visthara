import React, { useState } from 'react';

import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { StatsCounter } from './components/StatsCounter';
import { ProjectOverview } from './components/ProjectOverview';
import { Configurations } from './components/Configurations';
import { Amenities } from './components/Amenities';
import { MasterPlanGallery } from './components/MasterPlanGallery';
import { NearbyConnectivity } from './components/NearbyConnectivity';
import { FaqSection } from './components/FaqSection';
import { StickyActions } from './components/StickyActions';
import { EnquiryModal } from './components/EnquiryModal';
import { propertyData } from './data/propertyData';
import './App.css';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    initialData: {}
  });

  const handleOpenEnquiry = (initialData = {}) => {
    setModalState({
      isOpen: true,
      initialData
    });
  };

  const handleOpenBrochure = () => {
    setModalState({
      isOpen: true,
      initialData: { mode: 'brochure', title: 'Project Brochure & Floor Plans' }
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleSelectPlot = (plot) => {
    setModalState({
      isOpen: true,
      initialData: { title: `${plot.type || 'Luxury Villa'} - ${plot.price || ''}` }
    });
  };

  const { projectInfo } = propertyData;

  return (
    <div className="app-container">
      <Header
        onOpenEnquiry={() => handleOpenEnquiry({ title: 'Top Header Enquiry' })}
      />

      <main>
        <HeroBanner
          onFormSuccess={() => { }}
        />
        <StatsCounter />
        <ProjectOverview
          onOpenEnquiry={() => handleOpenEnquiry({ title: 'Site Visit Scheduling' })}
        />
        <Configurations onSelectPlot={handleSelectPlot} />
        <Amenities />
        <MasterPlanGallery />
        <NearbyConnectivity onOpenEnquiry={() => handleOpenEnquiry({ title: 'Location Advantage' })} />
        {/* <FaqSection /> */}
      </main>

      {/* Simple Footer */}
      <footer className="simple-footer">
        <div className="container simple-footer-container">
          <div className="footer-copyright">
            © {projectInfo.name}. All rights reserved. Sathy Main Road, 9 Saravanampatti, Coimbatore. DTCP Approved.
          </div>
          <div className="footer-links">
            <a href={`tel:${projectInfo.phone}`} className="footer-call-link">
              Direct Sales: {projectInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <StickyActions onOpenEnquiry={() => handleOpenEnquiry({ title: 'Sticky Action Enquiry' })} />

      <EnquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        initialData={modalState.initialData}
      />
    </div>
  );
}

export default App;
