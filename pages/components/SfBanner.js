import React from 'react';
import Image from 'next/image';

const SfBanner = () => {
  return (
    <div id="sfBannerColumn" className="container px-5 mx-auto">
      <div className="dealoftheday-area d-flex">
        <div className="dealoftheday1 text-start">
          <p>Deprem bölgelerine <strong>destek olabilirsiniz</strong></p>
          <Image src="/images/sfbanner1.jpeg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={150} />
        </div>
        <div className="dealoftheday1 text-start">
          <p>Uygun uçak biletlerini <strong>keşfet</strong></p><br />
          <Image src="/images/sfbanner.jpeg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={150} />
        </div>
        <div className="dealoftheday1 text-start">
          <p><strong>3 saatte bir</strong> yenilenen fırsatlar</p><br />
          <Image src="/images/sfbanner2.jpeg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={150} />
        </div>
        <div className="dealoftheday1 text-start">
          <p><strong>Hepsipay</strong> ile tanış</p>
          <br />
          <Image src="/images/sfbanner3.jpeg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={150} />
        </div>
        <div className="dealoftheday1 text-start">
          <p><strong>Süper fiyatlarla</strong> yurt dışında ürünler</p>
          <Image src="/images/sfbanner4.jpeg" className="img-fluid img-thumbnail" alt="deal of the day" width={200} height={150} />
        </div>
      </div>
    </div>
  );
};

export default SfBanner;