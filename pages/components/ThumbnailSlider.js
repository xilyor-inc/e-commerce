import React from 'react';
import Image from 'next/image';

const ThumbnailSlider = () => {
  return (
    <div id="thumbnailSlider" className="container my-5 py-5">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          <div className="baslik d-flex justify-content-start align-items-end mt-5 py-3">
            <p className="h2 mx-5"><strong>Aradığın Markalar</strong></p>
          </div>
          <div id="thumbnailCarousel" className="carousel slide">
            <div className="carousel-inner onebyone-carosel">
              <div className="carousel-item active">
                <div className="thumbnail text-center">
                  <div className="thumb">
                    <Image src="/images/marka1.jpeg" className="img-thumbnail" alt="arzum" width={100} height={100} />
                    <p>Arzum</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka2.jpeg" className="img-thumbnail" alt="june" width={100} height={100} />
                    <p>June</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka3.jpeg" className="img-thumbnail" alt="ayakkabı dünyası" width={100} height={100} />
                    <p>Ayakkabı Dünyası</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka4.jpeg" className="img-thumbnail" alt="regal" width={100} height={100} />
                    <p>Regal</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka5.jpeg" className="img-thumbnail" alt="joystar" width={100} height={100} />
                    <p>Joystar</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka6.jpeg" className="img-thumbnail" alt="english home" width={100} height={100} />
                    <p>English Home</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka7.jpeg" className="img-thumbnail" alt="marjin" width={100} height={100} />
                    <p>Marjin</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/marka8.jpeg" className="img-thumbnail" alt="emsan" width={100} height={100} />
                    <p>Emsan</p>
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
            <button className="carousel-control-prev" type="button" data-bs-target="#thumbnailCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon onceki" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#thumbnailCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon sonraki" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailSlider;