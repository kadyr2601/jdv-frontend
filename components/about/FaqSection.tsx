'use client';
import React, { useState } from 'react';

export interface FaqSectionProps {
  id: number;
  question: string;
  answer: string;
}

const FaqSection = ({ faq_section }: { faq_section: FaqSectionProps[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First FAQ active by default

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="col-lg-6 col-md-12">
      <div className="accordion">
        {faq_section.map((item, i) => (
          <div className="toggle ttm-toggle_style_classic ttm-toggle-title-bgcolor-grey" key={item.id} >
            <div className="toggle-title">
              <span className={activeIndex === i ? 'active a ' : 'a'} onClick={() => toggleFAQ(i)} >
                {item.question}
              </span>
            </div>
            <div
              className={activeIndex === i ? 'toggle-content show' : "toggle-content"}
              style={{ display: 'none' }}
              id={`faq-content-${item.id}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
