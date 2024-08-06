import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PreferredArea = () => {
  return (
    <div id="Preffer1" className="container my-5">
      <div className="baslik d-flex justify-content-start align-items-end my-3">
        <p className="h2 mx-5"><strong>Sana özel öneriler</strong></p>
        <Link href="#" className="h6"><strong>Tümü &gt;</strong>
        </Link>
      </div>
      <div id="prefferAreaCarousel" className="carousel slide px-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="dealoftheday-area d-flex">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="preffer text-center">
                  <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt={`preffer${item}`} width={150} height={150} />
                  <small>Kredi ile 12 taksit</small>
                  <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB...</p>
                  <div className="preffer-star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span>&nbsp;205</span>
                  </div>
                  <p className="h6"><strong>1544,99 TL</strong></p>
                  <span className="indirim">Sepette %50 indirim</span>
                  <span id="sepet2">Sepete Ekle</span>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="dealoftheday-area d-flex">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="preffer text-center">
                  <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt={`preffer${item}`} width={150} height={150} />
                  <small>Hemen Al Sonra Öde</small>
                  <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB...</p>
                  <div className="preffer-star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span>&nbsp;205</span>
                  </div>
                  <p className="h6"><strong>1544,99 TL</strong></p>
                  <span className="indirim">Sepette %50 indirim</span>
                  <span id="sepet2">Sepete Ekle</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#prefferAreaCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon onceki" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#prefferAreaCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon sonraki" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default PreferredArea;