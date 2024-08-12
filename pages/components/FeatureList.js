import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FeatureList.module.css';

const FeatureList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { id: 1, src: "/images/feature1.jpeg", alt: "feature1", text: "Feature 1" },
    { id: 2, src: "/images/feature2.jpeg", alt: "feature2", text: "Feature 2" },
    { id: 3, src: "/images/feature3.jpeg", alt: "feature3", text: "Feature 3" },
    { id: 4, src: "/images/feature4.jpeg", alt: "feature4", text: "Feature 4" },
    { id: 5, src: "/images/feature5.jpeg", alt: "feature5", text: "Feature 5" },
    { id: 6, src: "/images/feature6.jpeg", alt: "feature6", text: "Feature 6" },
    { id: 7, src: "/images/feature7.jpeg", alt: "feature7", text: "Feature 7" },
    { id: 8, src: "/images/feature8.jpeg", alt: "feature8", text: "Feature 8" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className={styles.featureList}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hepsiburada&apos;da herkes için ayrıcalık var</h2>
        <div className={styles.carousel}>
          <div 
            className={styles.carouselInner} 
            style={{ transform: `translateX(-${currentSlide * (100 / features.length)}%)` }}
          >
            {features.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <Image 
                  src={feature.src} 
                  alt={feature.alt} 
                  width={150} 
                  height={150} 
                  className={styles.image}
                />
                <p className={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
          <button className={`${styles.carouselControl} ${styles.prev}`} onClick={prevSlide}>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className={`${styles.carouselControl} ${styles.next}`} onClick={nextSlide}>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;