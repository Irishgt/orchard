import React from 'react';
import firstComponentData from '../data/first-component-data'; 


const FirstComponent = () => {
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
    />
  </div>
)}
</div>
       
        <div className='images-container'>
            {firstComponentData.images.slice(1).map((item, index) => (
            <div className="images" key={index}>
                <img src={item.image} alt={item.altText} className="modal-image" />
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
          <div> <label>{firstComponentData.label} </label></div>
          <p><strong>{firstComponentData.description2}</strong></p>
        </div>
    </section>
  );
};

export default FirstComponent;
