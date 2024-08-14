import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainSlider.module.css';

const MainSlider = () => {
  const [activeTab, setActiveTab] = useState('elektronik');
  const [isPC, setIsPC] = useState(false); // Initial state for PC detection
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    // Function to check if the window width is >= 1024px
    const checkIfPC = () => {
      setIsPC(window.innerWidth >= 1024);
    };

    // Initial check on component mount
    checkIfPC();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfPC);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkIfPC);
  }, []);

  const tabData = [
    { id: 'elektronik', label: 'Elektronik' },
    { id: 'ev-yasam', label: 'Ev, Yaşam' },
    { id: 'moda-kozmetik', label: 'Moda ve Kozmetik' },
    { id: 'anne-cocuk', label: 'Anne, Çocuk' },
    { id: 'teknolojik-firsatlar', label: 'Teknolojik Fırsatlar' },
    { id: 'sana-ozel-firsatlar', label: 'Sana Özel Fırsatlar' },
    { id: 'ayricaliklar', label: 'Ayrıcalıklar' },
  ];

  const carouselItems = [
    {
      id: 1,
      image: '/images/slide1.jpeg',
      title: 'Süper laptoplarda',
      subtitle: 'zzzz fiyatlar',
      buttonText: 'Acele et kaçırma',
    },
    {
      id: 2,
      image: '/images/slide1.jpeg',
      title: 'Süper laptoplarda',
      subtitle: 'sssss fiyatlar',
      buttonText: 'Acele et kaçırma',
    },
    {
      id: 3,
      image: '/images/slide1.jpeg',
      title: 'Süper laptoplarda',
      subtitle: 'ddd fiyatlar',
      buttonText: 'Acele et kaçırma',
    },
  ];

  return (
    <div className={`${styles.sliderArea} ${isPC ? styles.pcBackground : ''}`}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          {/* Mobile menu toggle button */}
          {!isPC && (
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className={styles.menuIcon}></span>
              Menu
            </button>
          )}
          {/* Mobile menu overlay */}
          {!isPC && (
            <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
              <ul className={styles.navPills}>
                {tabData.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`${styles.navLink} ${activeTab === tab.id ? styles.active : ''}`}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* PC menu */}
          {isPC && (
            <div className={styles.menu}>
              <ul className={styles.navPills}>
                {tabData.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`${styles.navLink} ${activeTab === tab.id ? styles.active : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div className={styles.carousel} id="carouselExampleDark">
          <div className={styles.carouselInner}>
            {carouselItems.map((item, index) => (
              <div key={item.id} className={`${styles.carouselItem} ${index === 0 ? styles.active : ''}`} data-bs-interval="3000">
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                </div>
                <div className={styles.carouselCaption}>
                  <h5>{item.title}</h5>
                  <h3><strong>{item.subtitle}</strong></h3>
                  <button className={styles.btn}>{item.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
          <button className={`${styles.carouselControl} ${styles.prev}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
            <span className={styles.visuallyHidden}>Previous</span>
          </button>
          <button className={`${styles.carouselControl} ${styles.next}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
            <span className={styles.visuallyHidden}>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
