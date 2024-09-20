import React, { useEffect } from 'react';
import secondComponentData from '../data/second-component-data';

const SecondComponent = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        console.log(event.currentTarget); // logs  clicked anchor element
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', (event) => {
          console.log(event.currentTarget);
        });
      });
    };
  }, []);

  return (
    <section className="bottom-content">
      <div className='title'> 
        <h1>{secondComponentData.latestHeading}</h1>
      </div>
      <div className="latest-content-container">
        {secondComponentData.latestArticles.map((article, index) => (
          <a href={article.link} className="latest-item" key={index}>
            <div className='latest-item-image'>
              <img src={article.image} alt={article.altText} />
            </div>
            <div className="latest-content">
              <h3>{article.title}</h3>
              <div className='latest-description'>
                <p>{article.description}</p>
                <span className="cta">{article.readMoreText}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SecondComponent;
