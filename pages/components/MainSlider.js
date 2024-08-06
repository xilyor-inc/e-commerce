import React from 'react';
import Image from 'next/image';

const MainSlider = () => {
  return (
    <div id="slider-area" className="container-fluid text-center">
      <div className="container">
        <nav className="navbar navbar-expand-lg text-dark">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav2">
            <ul className="nav nav-pills justify-content-center mb-3 mx-5" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-elektronik-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-elektronik" type="button" role="tab"
                  aria-controls="pills-elektronik" aria-selected="true">Elektronik</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-ev-yasam-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-ev-yasam" type="button" role="tab" aria-controls="pills-ev-yasam"
                  aria-selected="false">Ev, Yaşam</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-moda-kozmetik-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-moda-kozmetik" type="button" role="tab"
                  aria-controls="pills-moda-kozmetik" aria-selected="false">Moda ve Kozmetik</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-anne-cocuk-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-anne-cocuk" type="button" role="tab"
                  aria-controls="pills-anne-cocuk" aria-selected="false">Anne, Çocuk</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-teknolojik-firsatlar-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-teknolojik-firsatlar" type="button" role="tab"
                  aria-controls="pills-teknolojik-firsatlar" aria-selected="false">Teknolojik Fırsatlar</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-sana-ozel-firsatlar-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-sana-ozel-firsatlar" type="button" role="tab"
                  aria-controls="pills-sana-ozel-firsatlar" aria-selected="false">Sana Özel Fırsatlar</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-ayricaliklar-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-ayricaliklar" type="button" role="tab"
                  aria-controls="pills-ayricaliklar" aria-selected="false">Ayrıcalıklar</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-elektronik" role="tabpanel"
            aria-labelledby="pills-elektronik-tab" tabIndex="0">
            <div id="carouselExampleDark" className="carousel carousel-dark slide mx-5 px-5">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                  className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active position-relative" data-bs-interval="3000">
                    <Image src="/images/slide1.jpeg" className="d-block ms-auto" alt="..." width={800} height={400} />
                    <div className="d-none d-md-block position-absolute carousel-ayar">
                      <h5>Süper laptoplarda</h5>
                      <h3><strong>avantajlı fiyatlar</strong></h3>
                      <button className="btn btn-primary">Acele et kaçırma</button>
                    </div>
                  </div>
                  <div className="carousel-item position-relative" data-bs-interval="3000">
                    <Image src="/images/slide1.jpeg" className="d-block ms-auto" alt="..." width={800} height={400} />
                    <div className="d-none d-md-block position-absolute carousel-ayar">
                      <h5>Süper laptoplarda</h5>
                      <h3><strong>avantajlı fiyatlar</strong></h3>
                      <button className="btn btn-primary">Acele et kaçırma</button>
                    </div>
                  </div>
                  <div className="carousel-item position-relative" data-bs-interval="3000">
                    <Image src="/images/slide1.jpeg" className="d-block ms-auto" alt="..." width={800} height={400} />
                    <div className="d-none d-md-block position-absolute carousel-ayar">
                      <h5>Süper laptoplarda</h5>
                      <h3><strong>avantajlı fiyatlar</strong></h3>
                      <button className="btn btn-primary">Acele et kaçırma</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* Other tab panes would go here, following the same structure as the "elektronik" pane */}
        </div>
      </div>
    </div>
  );
};

export default MainSlider;