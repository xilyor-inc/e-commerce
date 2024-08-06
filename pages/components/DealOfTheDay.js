import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DealOfTheDay = () => {
  return (
    <div id="DealoftheDay" className="container my-5">
      <div className="baslik d-flex justify-content-start align-items-end my-3">
        <p className="h2 mx-5"><strong>Süper Fiyat, Süper Teklif</strong></p>
        <div >
          <span className="h6"><strong>Tümü &gt;</strong></span>
        </div>
      </div>
      <div id="carouselExample" className="carousel slide px-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="dealoftheday-area d-flex">
              <div className="dealoftheday1 text-center">
                <Image src="/images/dealoftheday1.jpg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={200} />
              </div>
              <div className="dealoftheday text-center">
                <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB 512GB SSD RTX30...</p>
                <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt="deal of the day" width={150} height={150} />
                <span>154,99 TL</span>
                <span id="sepet">Sepete Ekle</span>
              </div>
              <div className="dealoftheday text-center">
                <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB 512GB SSD RTX30...</p>
                <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt="deal of the day" width={150} height={150} />
                <span>154,99 TL</span>
                <span id="sepet">Sepete Ekle</span>
              </div>
              <div className="dealoftheday text-center">
                <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB 512GB SSD RTX30...</p>
                <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt="deal of the day" width={150} height={150} />
                <span>154,99 TL</span>
                <span id="sepet">Sepete Ekle</span>
              </div>
              <div className="dealoftheday text-center">
                <p>Acer Nitro AN515-58 Intel Core i7 12700H 16GB 512GB SSD RTX30...</p>
                <Image src="/images/dealoftheday2.jpg" className="img-fluid img-thumbnail" alt="deal of the day" width={150} height={150} />
                <span>154,99 TL</span>
                <span id="sepet">Sepete Ekle</span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* Duplicate the structure above for additional carousel items */}
          </div>
          <div className="carousel-item">
            {/* Duplicate the structure above for additional carousel items */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon onceki" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon sonraki" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default DealOfTheDay;