import React from 'react';
import './Slide.css';

const Slide = ({ data, slideNumber, totalSlides }) => {
  const renderContent = () => {
    switch (data.type) {
      case 'title':
        return (
          <div className="title-slide">
            <h1 className="main-title">{data.title}</h1>
            <h2 className="subtitle">{data.subtitle}</h2>
            <div className="author">
              <p>By Dr. Muhammad Kamran</p>
            </div>
            <div className="date-info">
              <p>February 2026</p>
              <p>A Comprehensive Overview</p>
            </div>
            
            <div className="links-section">
              <h3>🚀 Quick Access Links:</h3>
              <div className="links-grid">
                {data.links?.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="ai-link">
                    {link.icon} {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'tool':
        return (
          <div className="tool-slide">
            <h1>{data.title}</h1>
            
            <div className="tool-card">
              <h2>Overview:</h2>
              <ul>
                {data.overview?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Key Features:</h3>
              <ul>
                {data.features?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="research-apps">
              <h3>Research Applications:</h3>
              <ul>
                {data.applications?.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              
              {data.example && (
                <div className="example-box">
                  <h4>💡 Practical Example:</h4>
                  <p>{data.example}</p>
                </div>
              )}
            </div>
            
            <div className="links-section">
              {data.links?.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="ai-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        );
      
      case 'content':
        return (
          <div className="content-slide">
            <h1>{data.title}</h1>
            
            {data.sections?.map((section, index) => (
              <div key={index} className={section.type === 'highlight' ? 'highlight' : 'tool-card'}>
                <h2>{section.title}</h2>
                {section.content && (
                  <ul>
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.subsections && section.subsections.map((sub, subIdx) => (
                  <div key={subIdx}>
                    <h3>{sub.title}</h3>
                    <ul>
                      {sub.content.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      
      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="slide">
      <div className="slide-number">{slideNumber}/{totalSlides}</div>
      {renderContent()}
    </div>
  );
};

export default Slide;