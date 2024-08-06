import React from 'react';
import Image from 'next/image';

const FeatureList = () => {
  return (
    <div id="featureList" className="container my-5">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          <div className="baslik d-flex justify-content-start align-items-end py-3">
            <p className="h2 mx-5"><strong>Hepsiburada&apos;da herkes için ayrıcalık var</strong></p>
          </div>
          <div id="thumbnailCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="thumbnail text-center">
                  <div className="thumb">
                    <Image src="/images/feature1.jpeg" className="img-responsive img-thumbnail" alt="feature1" width={150} height={150} />
                    <p>Feature 1</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature2.jpeg" className="img-thumbnail" alt="feature2" width={150} height={150} />
                    <p>Feature 2</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature3.jpeg" className="img-thumbnail" alt="feature3" width={150} height={150} />
                    <p>Feature 3</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature4.jpeg" className="img-thumbnail" alt="feature4" width={150} height={150} />
                    <p>Feature 4</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature5.jpeg" className="img-thumbnail" alt="feature5" width={150} height={150} />
                    <p>Feature 5</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature6.jpeg" className="img-thumbnail" alt="feature6" width={150} height={150} />
                    <p>Feature 6</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature7.jpeg" className="img-thumbnail" alt="feature7" width={150} height={150} />
                    <p>Feature 7</p>
                  </div>
                  <div className="thumb">
                    <Image src="/images/feature8.jpeg" className="img-thumbnail" alt="feature8" width={150} height={150} />
                    <p>Feature 8</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#featureList" data-bs-slide="prev">
              <span className="carousel-control-prev-icon onceki" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#featureList" data-bs-slide="next">
              <span className="carousel-control-next-icon sonraki" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;