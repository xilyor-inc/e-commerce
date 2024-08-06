import React from 'react';
import Image from 'next/image';

const ReviewArea = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          <p className="h2 mx-5 my-3"><strong>Şimdi değerlendirme zamanı</strong></p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-5 review d-flex justify-content-center align-items-center text-center">
          <Image src="/images/review1.jpg" alt="review1" width={200} height={200} />
          <div className="text-center review1">
            <div className="d-flex review-star">
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </div>
            <p className="h6 d-flex">
              <i className="bi bi-star"></i> 
              <strong>&nbsp;4,2 - 4349</strong>
              &nbsp;Değerlendirme
            </p>
          </div>
        </div>
        <div className="col-5 review d-flex justify-content-center align-items-center text-center">
          <Image src="/images/review2.jpg" alt="review2" width={200} height={200} className="" />
          <div className="text-center review1">
            <div className="d-flex review-star">
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </div>
            <p className="h6 d-flex">
              <i className="bi bi-star"></i> 
              <strong>&nbsp;4,2 - 4349</strong>
              &nbsp;Değerlendirme
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewArea;