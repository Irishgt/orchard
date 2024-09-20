import React, { useState } from 'react';
import firstComponentData from '../data/first-component-data'; 

const FirstComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="top-content">
      <div className='images-main-container'>
        <div className='images-container'>
          {firstComponentData.images.length > 0 && (
            <div className='images'>
              <img
                src={firstComponentData.images[0].image}
                alt={firstComponentData.images[0].altText}
                className="modal-image"
                onClick={openModal} // Open modal on click
              />
            </div>
          )}
        </div>
       
        <div className='images-container'>
          {firstComponentData.images.slice(1).map((item, index) => (
            <div className="images" key={index}>
              <img 
                src={item.image} 
                alt={item.altText} 
                onClick={openModal} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid-item text-content">
        <h2>{firstComponentData.heading}</h2>
        <hr/>
        <div className='description'>
          <p>{firstComponentData.description1}</p>
        </div>
        <div>
          <label>{firstComponentData.label}</label>
        </div>
        <p><strong>{firstComponentData.description2}</strong></p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h1>Modal content</h1> 
          </div>
        </div>
      )}
    </section>
  );
};

export default FirstComponent;
