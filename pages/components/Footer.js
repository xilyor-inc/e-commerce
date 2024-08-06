import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div id="footerHead" className="container my-5">
        <div className="row justify-content-center align-items-center g-2 my-5">
          <div id="header-col1" className="col-3">
            <div id="header-col1-1" className="col">
              <svg width="191" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 28">
                <path fill="#FF6000" d="M11.525 6.04c.808.344 1.471.87 1.99 1.58.44.6.71 1.218.807 1.852.099.635.148 1.671.148 3.108v9.448h-4.293v-9.79c0-.866-.146-1.565-.439-2.097-.38-.748-1.103-1.122-2.167-1.122-1.103 0-1.94.371-2.511 1.115-.571.743-.856 1.804-.856 3.182v8.712H0V.08h4.204v7.243c.778-.768 1.167-1.018 1.945-1.327.817-.324 1.8-.473 2.68-.473.99 0 1.888.172 2.696.517zm10.242 3.868c-.594.612-.967 1.442-1.12 2.488h7.242c-.076-1.115-.45-1.962-1.12-2.54-.67-.578-1.5-.867-2.493-.867-1.079 0-1.915.307-2.509.92zm6.289-3.632c1.121.503 2.048 1.296 2.778 2.379.658.955 1.086 2.063 1.281 3.324.113.738.159 1.802.138 3.19h-11.71c.066 1.613.626 2.744 1.682 3.393.642.404 1.415.605 2.318.605.957 0 1.736-.246 2.334-.738.326-.265.615-.634.865-1.106h4.292c-.113.954-.633 1.923-1.558 2.906-1.44 1.563-3.457 2.345-6.049 2.345-2.14 0-4.027-.66-5.663-1.978-1.636-1.32-2.453-3.464-2.453-6.437 0-2.785.738-4.92 2.214-6.407 1.477-1.486 3.393-2.229 5.75-2.229 1.399 0 2.66.251 3.78.753zM44.628 10.7c-.571-.953-1.498-1.43-2.78-1.43-1.54 0-2.597.722-3.173 2.168-.298.767-.447 1.74-.447 2.92 0 1.869.501 3.182 1.504 3.938.596.443 1.301.664 2.116.664 1.182 0 2.084-.452 2.706-1.357.62-.904.93-2.109.93-3.614 0-1.238-.285-2.335-.856-3.289zm3.226-3.024c1.312 1.387 1.967 3.423 1.967 6.107 0 2.832-.64 4.99-1.922 6.475-1.282 1.485-2.932 2.228-4.951 2.228-1.287 0-2.356-.32-3.207-.959-.465-.354-.92-.87-1.366-1.55v7.96h-4.159V5.95h4.027v2.375c.455-.697.94-1.248 1.454-1.652.94-.717 2.059-1.077 3.355-1.077 1.89 0 3.491.694 4.802 2.08zm7.588 9.22c.089.747.281 1.278.578 1.592.523.56 1.492.84 2.905.84.83 0 1.49-.122 1.978-.368.49-.245.734-.614.734-1.106 0-.472-.197-.83-.591-1.077-.394-.245-1.86-.669-4.398-1.268-1.827-.453-3.114-1.017-3.861-1.697-.748-.668-1.121-1.632-1.121-2.89 0-1.485.584-2.761 1.751-3.828 1.168-1.067 2.811-1.6 4.93-1.6 2.01 0 3.649.4 4.915 1.202 1.266.801 1.993 2.185 2.18 4.152h-4.204c-.059-.541-.212-.968-.458-1.284-.464-.57-1.253-.855-2.366-.855-.918 0-1.57.143-1.96.428-.39.285-.584.62-.584 1.003 0 .482.207.83.62 1.047.415.227 1.878.615 4.39 1.165 1.674.394 2.93.988 3.766 1.785.826.807 1.239 1.815 1.239 3.024 0 1.593-.594 2.893-1.781 3.901-1.188 1.008-3.023 1.512-5.506 1.512-2.532 0-4.402-.534-5.608-1.6-1.208-1.067-1.81-2.427-1.81-4.079h4.262zm12.676 5.132V5.951h4.263v16.077h-4.263zm17.888-4.35c.605-.876.908-2.026.908-3.452 0-1.141-.149-2.085-.446-2.833-.565-1.415-1.606-2.123-3.123-2.123-1.537 0-2.593.693-3.168 2.08-.298.737-.446 1.69-.446 2.86 0 1.378.307 2.518.922 3.423.615.905 1.551 1.357 2.81 1.357 1.091 0 1.939-.437 2.543-1.313zm3.514-9.795c1.203 1.524 1.804 3.491 1.804 5.9 0 2.498-.593 4.568-1.78 6.21-1.185 1.642-2.84 2.463-4.966 2.463-1.334 0-2.407-.265-3.217-.796-.484-.315-1.008-.865-1.571-1.652v2.02h-4.145V.036h4.204v8.01c.534-.748 1.123-1.318 1.766-1.712.762-.491 1.732-.737 2.91-.737 2.128 0 3.793.762 4.995 2.286zm8.31-1.932v9.69c0 .915.107 1.604.323 2.066.381.816 1.13 1.224 2.245 1.224 1.428 0 2.407-.58 2.935-1.74.274-.63.412-1.46.412-2.493V5.95h4.262v16.077h-4.086v-2.271a8.17 8.17 0 0 0-.294.442 2.928 2.928 0 0 1-.559.65c-.657.59-1.291.993-1.905 1.21-.612.215-1.33.323-2.154.323-2.373 0-3.972-.855-4.795-2.566-.461-.944-.692-2.335-.692-4.174V5.95h4.308zm22.35-.376c.055.005.175.012.362.022v4.307a11.593 11.593 0 0 0-1.21-.074c-1.691 0-2.826.551-3.407 1.652-.325.62-.486 1.574-.486 2.862v7.684h-4.234V5.951h4.012v2.802c.65-1.071 1.215-1.804 1.696-2.197.787-.659 1.81-.988 3.069-.988.078 0 .145.002.198.007zm28.693 12.087c.62-.885.93-2.03.93-3.436 0-1.967-.497-3.373-1.49-4.219a3.208 3.208 0 0 0-2.124-.767c-1.23 0-2.131.465-2.707 1.394-.575.93-.863 2.083-.863 3.459 0 1.485.293 2.672.878 3.562.585.89 1.472 1.335 2.662 1.335s2.095-.442 2.714-1.328zM147.841 6.21a5.112 5.112 0 0 1 1.844 1.778V.037h4.262v21.991h-4.085v-2.227c-.6.954-1.284 1.648-2.05 2.08-.768.433-1.721.649-2.862.649-1.878 0-3.459-.76-4.742-2.279-1.284-1.52-1.925-3.468-1.925-5.849 0-2.743.632-4.9 1.895-6.474 1.264-1.574 2.953-2.36 5.067-2.36.973 0 1.838.213 2.596.64zm-15.853 8.035c-.268.167-.54.302-.813.404-.274.103-.649.2-1.127.288l-.954.176c-.895.157-1.538.349-1.928.575-.661.382-.991.976-.991 1.78 0 .716.201 1.234.605 1.553.403.32.894.478 1.472.478.917 0 1.761-.264 2.534-.794.772-.53 1.172-1.497 1.202-2.9v-1.56zm.133 7.798s.03-1.518 0-1.881a8.662 8.662 0 0 1-2.013 1.604c-.908.52-1.935.78-3.08.78-1.46 0-2.667-.414-3.62-1.244-.952-.829-1.428-2.003-1.428-3.524 0-1.973.766-3.4 2.298-4.283.84-.481 2.076-.825 3.707-1.03l1.438-.178c.781-.098 1.34-.22 1.676-.368.602-.255.905-.652.905-1.192 0-.657-.232-1.111-.695-1.361-.462-.25-1.14-.375-2.036-.375-1.005 0-1.716.245-2.133.735-.299.363-.498.854-.597 1.472h-4.048c.089-1.403.483-2.555 1.183-3.46 1.113-1.411 3.025-2.118 5.735-2.118 1.764 0 3.331.349 4.701 1.044 1.37.698 2.054 2.012 2.054 3.945v7.36c0 .51.01 3.348.03 4.074h-4.077zm34.028-7.798a4.53 4.53 0 0 1-.814.404 6.902 6.902 0 0 1-1.126.288l-.955.176c-.895.157-1.537.349-1.928.575-.66.382-.991.976-.991 1.78 0 .716.202 1.234.606 1.553.403.32.894.478 1.472.478.916 0 1.76-.264 2.533-.794.772-.53 1.173-1.497 1.203-2.9v-1.56zm.132 7.798s.03-1.518 0-1.881a8.675 8.675 0 0 1-2.013 1.604c-.908.52-1.935.78-3.08.78-1.46 0-2.667-.414-3.62-1.244-.951-.829-1.427-2.003-1.427-3.524 0-1.973.765-3.4 2.297-4.283.84-.481 2.077-.825 3.707-1.03l1.439-.178c.78-.098 1.339-.22 1.675-.368.603-.255.905-.652.905-1.192 0-.657-.231-1.111-.694-1.361-.463-.25-1.141-.375-2.036-.375-1.005 0-1.717.245-2.134.735-.299.363-.497.854-.597 1.472h-4.048c.089-1.403.483-2.555 1.183-3.46 1.113-1.411 3.025-2.118 5.736-2.118 1.763 0 3.33.349 4.7 1.044 1.37.698 2.055 2.012 2.055 3.945v7.36c0 .51.01 3.348.03 4.074h-4.078zM72.496 2.315a2.315 2.315 0 1 1-4.629 0 2.315 2.315 0 0 1 4.63 0z">
                </path>
              </svg>
            </div>
          </div>
          <div className="col-8 text-end footer-link">
            {/* <Link href="#">Siparişlerim</Link> | <Link href="#">Müşteri Hizmetleri</Link> */}
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-2 my-5">
          <div className="col-6 feedback-top">
            <div className="col-5 feedback">
              <p className="h5">Yarın Kapında</p>
              <Image src="/images/mobil-yarin-kapinda.svg" width={120} height={120} alt="yarın kapında" />
              <p>Yarın Kapında ile ihtiyaçlarına ertesi gün sahip ol!</p>
            </div>
            <div className="d-flex" style={{ height: "180px", margin: "0 20px" }}>
              <div className="vr"></div>
            </div>
            <div className="col-5 feedback">
              <p className="h5">Tek Tıkla Güvenli Alışveriş</p>
              <Image src="/images/mobil-tek-tikla-alisveris.svg" width={120} height={120} alt="tek tıkla alışveriş" />
              <p>Ödeme ve adres bilgilerinizi kaydedin, güvenli alışveriş yapın.</p>
            </div>
          </div>
          <div className="col-6 feedback-top">
            <div className="d-flex" style={{ height: "180px", margin: "0 20px" }}>
              <div className="vr"></div>
            </div>
            <div className="col-5 feedback">
              <p className="h5">Mobil Cebinizde</p>
              <Image src="/images/mobil-cebinizde.svg" width={120} height={120} alt="mobil cebinizde" />
              <p>Dilediğiniz her yerden güvenli alışverişin keyfini çıkarın.</p>
            </div>
            <div className="d-flex" style={{ height: "180px", margin: "0 20px" }}>
              <div className="vr"></div>
            </div>
            <div className="col-5 feedback">
              <p className="h5">Kapında İade</p>
              <Image src="/images/imageUrl2107_20230116110649.png" width={120} height={120} alt="kapında iade" />
              <p>Aldığınız ürünü iade etmek hiç bu kadar kolay olmamıştı.</p>
            </div>
          </div>
        </div>
        <hr />
        {/* Toggle section */}
        <div className="toggler">
          <div className="toggle-top">
            <p>
              <strong>Alışveriş fırsatları</strong><br /><br />
              Türkiye'nin en büyük online alışveriş sitesi Hepsiburada, 2001 yılından bu yana
              hizmet veriyor. Doğan Holding bünyesinde
              faaliyet gösteren Hepsiburada, yenilikleri ile Türkiye'nin dijital alışveriş
              sektörüne yön veriyor. Online alışveriş
              deneyimini her geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine
              uygun geliştirmelerle sunduğu
              hizmetleri daha da avantajlı kılan Hepsiburada, ziyaretçilerine bol çeşit, uygun
              fiyat, hızlı teslimat ve sürpriz
              indirimler sunuyor. Bugün 35'ten fazla kategori içinde 20 milyondan fazla ürün
              çeşidi bulunduran site, 16 milyondan
              fazla üye ile Türkiye'de e-ticaretin lideri olmanın gururunu yaşıyor.
              <br /><br />
              En iyi ürünleri en uygun fiyatlarla, en hızlı teslimatla ve müşteri memnuniyeti
              hedefiyle sunan Hepsiburada, büyümeye ve
              Türkiye'de e-ticaret deneyiminin standartlarını her geçen gün yükseltmeye devam
              ediyor. <br />
              <a className="" data-bs-toggle="collapse" href="#toggle-info" role="" aria-expanded="false"
                aria-controls="multiCollapseExample1">Devamını Göster</a>
            </p>
          </div>
          <div className="row">
            <div className="col">
              <div className="collapse" id="toggle-info">
                {/* Add more content here for the toggle section */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Bottom menu */}
        <div className="row g-2">
          <div className="col-7 bottom-menu">
            {/* Add bottom menu content here */}
          </div>
          <div className="col-5 bottom-menu-right text-center">
            {/* Add right bottom menu content here */}
          </div>
        </div>
      </div>
      <div id="footerEnd" className="container-fluid mt-5">
        <div className="container">
          {/* Add footer end content here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;