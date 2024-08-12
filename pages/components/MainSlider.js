import React, { useState } from 'react';
import Image from 'next/image';

const MainSlider = () => {
  const [activeTab, setActiveTab] = useState('elektronik');

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
    // Add more carousel items as needed
  ];

  return (
    <div id="slider-area" className="container-fluid text-center" style={{
      backgroundImage: "url('/images/format_webp.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg text-dark">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav2">
            <ul className="nav nav-pills justify-content-center mb-3 mx-5" id="pills-tab" role="tablist">
              {tabData.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id={`pills-${activeTab}`} role="tabpanel" tabIndex="0">
            <div id="carouselExampleDark" className="carousel carousel-dark slide mx-5 px-5">
              <div className="carousel-indicators">
                {carouselItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                  <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''} position-relative`} data-bs-interval="3000">
                    <Image src={item.image} className="d-block ms-auto" alt={item.title} width={800} height={400} />
                    <div className="d-none d-md-block position-absolute carousel-ayar">
                      <h5>{item.title}</h5>
                      <h3><strong>{item.subtitle}</strong></h3>
                      <button className="btn btn-primary">{item.buttonText}</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;