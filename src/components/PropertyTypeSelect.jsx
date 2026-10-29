import React, { useState, useRef, useEffect } from 'react';
import { Home, ChevronDown, Check, Sparkles } from 'lucide-react';
import './PropertyTypeSelect.css';

export const PROPERTY_OPTIONS = [
  {
    value: "3 BHK Luxury Villa (₹2 Cr* - 30' × 40')",
    title: "3 BHK Luxury Villa",
    price: "₹2 Cr*",
    dimension: "30' × 40'",
    tag: "Popular Choice"
  },
  {
    value: "3 BHK Premium Villa (₹2.5 Cr* - 30' × 50')",
    title: "3 BHK Premium Villa",
    price: "₹2.5 Cr*",
    dimension: "30' × 50'",
    tag: "Large Living & Lawn"
  },
  {
    value: "4 BHK Royal Villa (From ₹3 Cr* - 35' × 50')",
    title: "4 BHK Royal Villa",
    price: "From ₹3 Cr*",
    dimension: "35' × 50'",
    tag: "Double Car Parking"
  }
];

export const PropertyTypeSelect = ({
  value = '',
  onChange,
  name = 'propertyType',
  placeholder = 'Select Property Type *'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Match current value to one of the options
  const selectedOption = PROPERTY_OPTIONS.find(opt => {
    if (!value) return false;
    if (opt.value === value) return true;
    const lowerVal = value.toLowerCase();
    const lowerTitle = opt.title.toLowerCase();
    return lowerVal.includes(lowerTitle) || opt.value.toLowerCase().includes(lowerVal);
  });

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: option.value
        }
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? 'active' : ''} ${selectedOption ? 'has-value' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="custom-select-trigger-content">
          <Home size={18} className="custom-select-lead-icon" />
          {selectedOption ? (
            <div className="custom-select-selected-info">
              <span className="custom-select-selected-title">{selectedOption.title}</span>
              <span className="custom-select-selected-pill">{selectedOption.price} • {selectedOption.dimension}</span>
            </div>
          ) : (
            <span className="custom-select-placeholder">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={18} className={`custom-select-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {/* Hidden input to hold current value */}
      <input type="hidden" name={name} value={value} />

      {/* Dropdown Options Menu */}
      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          <div className="custom-select-dropdown-header">
            <span>CHOOSE VILLA CONFIGURATION</span>
            <Sparkles size={13} />
          </div>

          <div className="custom-select-options-list">
            {PROPERTY_OPTIONS.map((opt) => {
              const isSelected = selectedOption?.value === opt.value;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-select-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(opt)}
                >
                  <div className="custom-select-option-left">
                    <div className="custom-select-option-title-row">
                      <span className="custom-select-option-title">{opt.title}</span>
                      <span className="custom-select-option-price">{opt.price}</span>
                    </div>
                    <div className="custom-select-option-sub-row">
                      <span className="custom-select-option-dim">{opt.dimension} Built-Up</span>
                      <span className="custom-select-option-tag">{opt.tag}</span>
                    </div>
                  </div>

                  <div className="custom-select-option-right">
                    <div className={`custom-select-check-circle ${isSelected ? 'active' : ''}`}>
                      <Check size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

