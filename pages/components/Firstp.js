import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported elsewhere

const Firstp = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setIsMounted(true);

        if (typeof window !== 'undefined') {
            import('bootstrap').then(({ Popover, Tab }) => {
                // Initialize Bootstrap Popovers
                const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                popoverTriggerList.forEach(popoverTriggerEl => {
                    new Popover(popoverTriggerEl);
                });

                // Initialize Bootstrap Tabs
                const triggerTabList = document.querySelectorAll('#myTab button');
                triggerTabList.forEach(triggerEl => {
                    const tabTrigger = new Tab(triggerEl);

                    triggerEl.addEventListener('click', event => {
                        event.preventDefault();
                        tabTrigger.show();
                    });
                });
            });
        }
    }, []);

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    if (!isMounted) {
        return null; // or a loading indicator
    }
    return (
        <>
            <div id="filter-main" className="container-fluid">
                <div className="container filter-top">
                    <div id="ust" className="row justify-content-center align-items-center g-2">
                        <div className="col d-flex my-3">
                            <div>
                                <a href="#">Ana Sayfa</a>
                                <a href="#">Bilgisayarlar</a>
                                <a href="#">Bilgisayarlar</a>
                                <a href="#">Laptop&Notebook</a>
                                <a href="#">Lenovo Laptop&Notebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-end g-2">
                        <div className="row justify-content-end align-items-around g-2 banner">
                            <div className="col-10 d-flex justify-content-around align-items-center">
                                <div className="col-3">
                                    <p><span>APPLE ÇİPLE</span>daha da hızlı çalışın</p>
                                </div>
                                <div className="col-2 mx-5">
                                    <Image src="/images/bilg6.jpeg" width={120} height={120} alt="bilg6" />
                                </div>
                                <div className="col-3">
                                    <p>Mac ile <span>mümkün</span></p>
                                </div>
                                <div className="col-2">
                                    <a href="#" className="btn btn-outline-secondary">Satın al</a>
                                </div>
                                <div className="col-2">
                                    <Image src="/images/mac-logo.png" width={60} height={60} alt="mac-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row border rounded-3 mt-3">
                <div className="col-6">
                    <div className="row justify-content-center align-items-center g-2">
                        <div className="col">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                <Image src="/images/detail/intel-core-i5-logo.jpeg"
                                    style={{ top: '542px', left: '0', zIndex: 2 }} width={50} height={50}
                                    className="position-absolute" alt="Intel Core i5" />
                                <div className="carousel-indicators">
                                    {/* Carousel indicators */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <div key={num} className="card active" style={{ width: '80px' }} type="button">
                                            <Image src={`/images/detail/slider${num}.jpeg`} className="img-thumbnail"
                                                data-bs-slide-to={num - 1} alt={`slider${num}`}
                                                data-bs-target="#carouselExampleDark" width={80} height={80} />
                                        </div>
                                    ))}
                                </div>
                                <div className="carousel-inner">
                                    {/* Carousel items */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <div key={num} className={`carousel-item ${num === 1 ? 'active' : ''}`}>
                                            <Image src={`/images/detail/slider${num}.jpeg`} className="d-block w-100 mb-5"
                                                alt={`slider${num}`} width={500} height={500} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Product features */}
                    <hr />
                    <div className="row justify-content-center align-items-center g-2">
                        <div className="col-6 d-flex justify-content-around ozellik mb-5">
                            <div className="col-5 d-inline ozellik-baslik">
                                <div><strong>Ekran Kartı Hafızası</strong></div>
                                <div><strong>İşletim Sistemi</strong></div>
                                <div><strong>İşlemci Tipi</strong></div>
                                <div><strong>Ekran Boyutu</strong></div>
                            </div>
                            <div className="col-5 d-inline ozellik-aciklama">
                                <div>Paylaşımlı</div>
                                <div>Yok (Free Dos)</div>
                                <div>Intel Core 5</div>
                                <div>15,6 inç</div>
                            </div>

                            <div className="col-5 d-inline ozellik-baslik">
                                <div><strong>Harddisk Kapasitesi</strong></div>
                                <div><strong>İşlemci</strong></div>
                                <div><strong>Ram (Sistem Belleği)</strong></div>
                                <div><strong>Ekran Kartı</strong></div>
                            </div>
                            <div className="col-5 d-inline ozellik-aciklama">
                                <div>Yok</div>
                                <div>1155G7</div>
                                <div>8 GB</div>
                                <div>Paylaşımlı</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex sag-ozellik p-3">
                    {/* Product information */}
                    <div className="row justify-content-start align-items-start">
                        <div className="col-12">
                            <div>
                                <p><strong>Lenovo Ideapad 3 Intel Core i5 1155G7 8GB 512GB SSD Freedos 15.6" FHD
                                    Taşınabilir
                                    Bilgisayar 82H8034ETX</strong>
                                    <small className="text-primary"><strong>Lenovo</strong></small>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="h2"><strong>11.899,00 TL</strong></p>
                                <p><span>4,8</span>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#" className="ozellik-link">
                                    <p className="h6">1044 TL x 12 aya varan <strong>Taksitle</strong></p>
                                </a>
                                <a href="#" className="ozellik-link">
                                    <p><strong>125 Değerlendirme</strong></p>
                                </a>
                            </div>
                            <div className="d-flex">
                                <a href="#" className="ozellik-link d-flex">
                                    <Image src="images/premium.png" width={50} height={20} alt="" /> &nbsp;&nbsp;
                                    <p>Premium'a geç,bu üründen <strong>Hepsipara</strong> kazan.
                                    </p>
                                </a>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex justify-content-start">
                                    <p className="ozel-alan">
                                        Satıcı: <a href="#" className="text-primary mx-1"> iyifiyatburada1</a> |
                                        <a href="#" className="ozellik-link mx-1" data-bs-toggle="popover"
                                            data-bs-placement="right"
                                            data-bs-content="Satıcı puanı, Hepsiburada.com müşterileri tarafından verilen zamanında gönderim, 
                                                paketleme ve genel alışveriş deneyimi puanlarına göre hesaplanmaktadır.
                                                Tüm siparişler Hepsiburada güvencesi altındadır.
                                                Değerlendirmeler son 6 ay içerisinde yapılan değerlendirme sayısını vermektedir."
                                            data-bs-trigger="focus">
                                            Puan <small className="mx-1">9,3</small>
                                            <i className="bi bi-question-circle"></i>
                                        </a>

                                    </p>
                                    <a href="#" className="btn btn-outline-secondary">Satıcıya Sor(4)</a>
                                </div>

                            </div>
                            <div className="col-4 variant">
                                <Image className="col-1" src="images/bilg1.jpeg" width={10} height={60} alt="bilg1" />
                                <div>
                                    <span>Gri</span>
                                    <p className="h6"><strong>11.899,00 TL</strong></p>
                                </div>
                            </div>
                            <div className="my-4">
                                <p><strong>Ek hizmet ister misin?</strong></p>
                                <div className="row justify-content-start align-items-center g-2">
                                    <div className="col-6 kazaen position-relative">
                                        <a href="#" className="btn btn-warning position-absolute"> <i
                                            className="bi bi-plus-lg mx-1"></i>Ekle</a>
                                        <div className="col mx-2 my-2">
                                            <strong>Kazaen Zarar Sigortası</strong>
                                        </div>
                                        <div className="col mx-2">
                                            <Image src="images/hb_koruma_paketi.png" width={120} height={20} alt="" />
                                            <i className="bi bi-info-circle-fill"></i>
                                        </div>

                                        <div className="col mx-2">
                                            <span>1 yıl geçerli kırılma, sıvı teması ve hırsızlık
                                            </span>

                                        </div>
                                        <div className="mx-2 ">
                                            <p className="h6"><strong>759,00 TL</strong></p>
                                        </div>

                                    </div>
                                </div>
                                <div className="clear-fix"></div>
                                <div className="row justify-content-center align-items-center g-2">
                                    <div className="col miktar">
                                        <div className="btn-group my-3" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-secondary"><strong>-</strong></button>
                                            <input type="text" name="txtAdet" id="adet" readOnly placeholder="1 Adet" />
                                            <button type="button" className="btn btn-secondary"><strong>+</strong></button>
                                        </div>
                                        <button id="sepet-ek" type="button" className="btn btn-secondary">
                                            <strong><i className="bi bi-cart4 mx-2"></i>Sepete Ekle</strong>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="row justify-content-start align-items-center">
                                <div className="col-11 eskici">
                                    <Image src="images/eskiyi-yenile.jpeg" alt="eskiyi-yenile"
                                        className="rounded-5 mx-2" width={60} height={60} />
                                    <div>Eski ürününü yenisi ile değiştirmek ister misin?</div>
                                    <i className="bi bi-question-circle"></i>
                                    <button className="btn btn-light">Faydalan</button>
                                </div>
                            </div>
                            <div className="row justify-content-start align-items-center">
                                <div className="col-11 alisveris-kredisi">
                                    <Image src="images/alisveris-kredi.png" alt="alisveris-kredisi"
                                        className="rounded-5 mx-2" width={60} height={60} />
                                    <div><strong>1.222,31 TL</strong>'den başlayan fiyatla sahip olmak ister
                                        misin?</div>

                                    <button className="btn btn-light">Faydalan</button>
                                </div>
                            </div>

                            <div className="row kuponlar">
                                <strong className="my-2">Kuponlar</strong>
                                <div className="col-6 kupon position-relative">
                                    <a href="#" className="btn btn-warning position-absolute"><strong>Kazandın<i
                                        className="bi bi-check2"></i></strong></a>
                                    <div className="col mx-2 my-2">
                                        <strong>500 TL</strong>

                                        <span>Alt limit 10.000 TL
                                        </span>
                                    </div>
                                    <div className="mx-1" />
                                    <div className="col mx-2">
                                        <div className="circle-right"></div>

                                        <div className="circle-left"></div>

                                    </div>
                                    <div className="mx-2 d-flex justify-content-between">
                                        <p>Geçerlilik: 11.06.2023 23:59</p>
                                        <span><a href="#">Detaylar</a></span>
                                    </div>

                                </div>
                            </div>
                            <div className="col2 d-flex justify-content-start like-area">
                                <div><i className="bi bi-suit-heart mx-2"></i><span>Beğen</span></div>
                                <div><a href="#"><i className="bi bi-bookmark mx-2"></i><span>Listeme
                                    Ekle</span></a></div>
                                <div><a href="#"><i
                                    className="bi bi-arrow-left-right mx-2"></i><span>Karşılaştır</span></a>
                                </div>
                            </div>
                        </div>

                        <div className="row kuponlar">
                            <div className="col kupon">
                                <div className="d-flex justify-content-between">
                                    <strong className="my-2">Teslimat Seçenekleri</strong>
                                    <a href="#" className="btn btn-warning">
                                        <strong><i className="bi bi-geo-alt"></i>İş</strong></a>
                                </div>
                                <div className="col mx-2 my-2 d-flex justify-content-between">
                                    <div>
                                        <strong>Standart Teslimat</strong>

                                        <span>Tahmini 17 Haziran Cumartesi kapında
                                        </span>
                                    </div>
                                    <Image src="images/hepsijet.jpg" className="my-2" width={50} height={18} alt="hepsijet" />
                                </div>
                                <div className="row justify-content-center align-items-center g-2">
                                    <div className="btn btn-outline-info col12 d-flex justify-content-between my-3">
                                        <div>
                                            <i className="bi bi-truck"></i>
                                            <span>Daha hızlı teslimat yapan satıcılar var</span>
                                        </div>
                                        <i className="bi bi-caret-right"></i>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row justify-content-center align-items-center g-2" style={{ flexDirection: 'column', margin: '0 10px' }}>
                            <div className="col d-flex justify-content-between">
                                <strong>Diğer Satıcılar -
                                    <a href="#" style={{ textDecoration: 'none', color: 'orange' }}>Tümü</a>
                                </strong>
                            </div>
                            <span><i className="bi bi-question-circle"></i></span>
                        </div>

                        <div className="col-12 shipping-area">
                            <div className="col-12 shipping">
                                <div>
                                    <div>
                                        <small>9,8</small>
                                        <span>OKYANUS MALATYA</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-baseline">
                                        <p>Tahmini <strong>15 Haziran Perşembe</strong> kapında</p>
                                        <div>
                                            <strong>12.120,00 TL</strong>
                                            <button id="sepet-ek" type="button" className="btn btn-secondary">
                                                <strong>Sepete Ekle</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 shipping">
                                <div>
                                    <div>
                                        <small>9,8</small>
                                        <span>OKYANUS MALATYA</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-baseline">
                                        <p>Tahmini <strong>15 Haziran Perşembe</strong> kapında</p>
                                        <div>
                                            <strong>12.120,00 TL</strong>
                                            <button id="sepet-ek" type="button" className="btn btn-secondary">
                                                <strong>Sepete Ekle</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                    {/* Add more product information here */}
                </div>
            </div>

            <div className="container tab-menu-area">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2 active" id="pills-urun-aciklama-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-urun-aciklama" type="button" role="tab"
                                    aria-controls="pills-urun-aciklama" aria-selected="true"><strong>Ürün
                                        Açıklaması</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-degerlendirmeler-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-degerlendirmeler" type="button" role="tab"
                                    aria-controls="pills-degerlendirmeler"
                                    aria-selected="false"><strong>Değerlendirmeler(96)</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-soru-cevap-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-soru-cevap" type="button" role="tab"
                                    aria-controls="pills-soru-cevap"
                                    aria-selected="false"><strong>Soru&Cevap</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-taksit-secenekleri-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-taksit-secenekleri" type="button" role="tab"
                                    aria-controls="pills-taksit-secenekleri" aria-selected="false"><strong>Taksit
                                        Seçenekleri</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-alisveris-kredisi-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-alisveris-kredisi" type="button" role="tab"
                                    aria-controls="pills-alisveris-kredisi" aria-selected="false"><strong>Alışveriş
                                        Kredisi</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-iptal-iade-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-iptal-iade" type="button" role="tab"
                                    aria-controls="pills-iptal-iade" aria-selected="false"><strong>İptal ve İade
                                        Koşulları</strong></button>
                            </li>
                            <li className="nav-item2" role="presentation">
                                <button className="nav-link2" id="pills-tum-saticilar-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-tum-saticilar" type="button" role="tab"
                                    aria-controls="pills-tum-saticilar" aria-selected="false"><strong>Tüm
                                        Satıcılar</strong></button>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>




            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-urun-aciklama" role="tabpanel"
                    aria-labelledby="pills-urun-aciklama-tab" tabIndex="0">

                    <small>Lenovo Ideapad 3 Intel Core i5 1155G7 8GB 512GB SSD Freedos 15.6" FHD
                        Taşınabilir Bilgisayar 82H8034ETX</small>

                    <strong>Lenovo Ideapad 3 Intel Core i5 1155G7 8GB 512GB SSD Freedos 15.6" FHD
                        Taşınabilir Bilgisayar 82H8034ETX Özellikleri</strong>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Bellek Hızı</strong>
                        </div>
                        <div className="col-7">
                            <span>3200 MHz</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5">
                            <strong>Bluetooth Özelliği</strong>
                        </div>
                        <div className="col-7">
                            <span>Var</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Cihaz Ağırlığı</strong>
                        </div>
                        <div className="col-7">
                            <span>1 - 2 kg</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Dokunmatik Ekran</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Yok</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Bellek Hızı</strong>
                        </div>
                        <div className="col-7">
                            <span>3200 MHz</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Bluetooth Özelliği</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Var</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Cihaz Ağırlığı</strong>
                        </div>
                        <div className="col-7">
                            <span>1 - 2 kg</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Dokunmatik Ekran</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Yok</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Bellek Hızı</strong>
                        </div>
                        <div className="col-7">
                            <span>3200 MHz</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Bluetooth Özelliği</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Var</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Cihaz Ağırlığı</strong>
                        </div>
                        <div className="col-7">
                            <span>1 - 2 kg</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Dokunmatik Ekran</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Yok</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Bellek Hızı</strong>
                        </div>
                        <div className="col-7">
                            <span>3200 MHz</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Bluetooth Özelliği</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Var</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-dark-subtle1">
                        <div className="col-5">
                            <strong>Cihaz Ağırlığı</strong>
                        </div>
                        <div className="col-7">
                            <span>1 - 2 kg</span>
                        </div>
                    </div>
                    <div className="pills-table row p-1 m-1 bg-light-subtle">
                        <div className="col-5 koyu">
                            <strong>Dokunmatik Ekran</strong>
                        </div>
                        <div className="col-7 acik">
                            <span>Yok</span>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-degerlendirmeler" role="tabpanel"
                    aria-labelledby="pills-degerlendirmeler-tab" tabIndex="0">
                    <div className="row justify-content-between align-items-end mx-3 g-2">
                        <div className="col-9">
                            <strong>Lenovo Ideapad 3 Intel Core i5 1155G7 8GB 512GB SSD Freedos 15.6"
                                FHD
                                Taşınabilir Bilgisayar 82H8034ETX
                                Değerlendirmeleri
                            </strong>
                        </div>
                        <div className="col-3 text-end"><strong>Tüm
                            değerlendirmeler(96)</strong>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center g-2">
                        <div className="col-2 py-2">
                            <Image src="images/bilg7.jpeg" width={200} height={100} alt="" />
                        </div>
                        <div className="col-2 text-center">
                            <p className="h1 display-3">4,8</p>
                            <i className="bi bi-star-fill h3 text-warning"></i>
                            <i className="bi bi-star-fill h3 text-warning"></i>
                            <i className="bi bi-star-fill h3 text-warning"></i>
                            <i className="bi bi-star-fill h3 text-warning"></i>
                            <i className="bi bi-star-fill h3 text-warning"></i>
                        </div>
                        <div className="col-2">
                            <div
                                className="my-1 d-flex justify-content-start h-6 text-center align-items-center position-relative">
                                <div className="col-2 mx-2"><i
                                    className="col-2 bi bi-star-fill text-warning mx-1"></i>5
                                </div>
                                <div
                                    className="col-9 progress"
                                    role="progressbar"
                                    aria-label="Warning striped example"
                                    aria-valuenow="83"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '8px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: '83%' }}
                                    ></div>
                                </div>

                                <a href="#"
                                    className="stretched-link text-decoration-none text-dark mx-2">83</a>
                            </div>
                            <div
                                className="my-1 d-flex justify-content-start h-6 text-center align-items-center position-relative">
                                <div className="col-2 mx-2"><i
                                    className="col-2 bi bi-star-fill text-warning mx-1"></i>4
                                </div>
                                <div
                                    className="col-9 progress"
                                    role="progressbar"
                                    aria-label="Warning striped example"
                                    aria-valuenow="33"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '8px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: '33%' }}
                                    ></div>
                                </div>

                                <a href="#"
                                    className="stretched-link text-decoration-none text-dark mx-2">33</a>
                            </div>
                            <div
                                className="my-1 d-flex justify-content-start h-6 text-center align-items-center position-relative">
                                <div className="col-2 mx-2"><i
                                    className="col-2 bi bi-star-fill text-warning mx-1"></i>3
                                </div>
                                <div
                                    className="col-9 progress"
                                    role="progressbar"
                                    aria-label="Warning striped example"
                                    aria-valuenow="11"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '8px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: '11%' }}
                                    ></div>
                                </div>

                                <a href="#"
                                    className="stretched-link text-decoration-none text-dark mx-2">11</a>
                            </div>
                            <div
                                className="my-1 d-flex justify-content-start h-6 text-center align-items-center position-relative">
                                <div className="col-2 mx-2"><i
                                    className="col-2 bi bi-star-fill text-warning mx-1"></i>2
                                </div>
                                <div
                                    className="col-9 progress"
                                    role="progressbar"
                                    aria-label="Warning striped example"
                                    aria-valuenow="6"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '8px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: '6%' }}
                                    ></div>
                                </div>

                                <a href="#"
                                    className="stretched-link text-decoration-none text-dark mx-2">6</a>
                            </div>
                            <div
                                className="my-1 d-flex justify-content-start h-6 text-center align-items-center position-relative">
                                <div className="col-2 mx-2"><i
                                    className="col-2 bi bi-star-fill text-warning mx-1"></i>1
                                </div>
                                <div
                                    className="col-9 progress"
                                    role="progressbar"
                                    aria-label="Warning striped example"
                                    aria-valuenow="2"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '8px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        style={{ width: '2%' }}
                                    ></div>
                                </div>

                                <a href="#"
                                    className="stretched-link text-decoration-none text-dark mx-2">2</a>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center text-center px-5">

                            <div className="col-12 shadow m-5 p-2 bg-body-light rounded">
                                <div>
                                    <p><small>Öne çıkan özellikler</small></p>
                                </div>
                                <div className="col d-flex">
                                    <div
                                        className="col-3 p-2 d-flex flex-column justify-content-center align-items-center position-relative">
                                        <Image src="images/islemci.png" width={30} height={30} alt="islemci" />
                                        <small>İşlemci</small>
                                        <small><i className="bi bi-star-fill text-warning"></i>
                                            <strong>4,8</strong>
                                        </small>
                                        <small>(79)</small>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                    <div
                                        className="col-3 p-2 d-flex flex-column justify-content-center align-items-center position-relative">
                                        <Image src="images/hafiza.png" width={30} height={30} alt="hafiza" />
                                        <small>Hafıza</small>
                                        <small><i className="bi bi-star-fill text-warning"></i>
                                            <strong>4,8</strong>
                                        </small>
                                        <small>(75)</small>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                    <div
                                        className="col-3 p-2 d-flex flex-column justify-content-center align-items-center position-relative">
                                        <Image src="images/goruntu-kalitesi.png" width={30} height={30}
                                            alt="goruntu kalitesi" />
                                        <small>Görüntü Kalitesi</small>
                                        <small><i className="bi bi-star-fill text-warning"></i>
                                            <strong>4,6</strong>
                                        </small>
                                        <small>(77)</small>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                    <div
                                        className="col-3 p-2 d-flex flex-column justify-content-center align-items-center position-relative">
                                        <Image src="images/pil.png" width={30} height={30} alt="pil" />
                                        <small>Batarya</small>
                                        <small><i className="bi bi-star-fill text-warning"></i>
                                            <strong>4,6</strong>
                                        </small>
                                        <small>(76)</small>
                                        <a href="#" className="stretched-link"></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-3 d-flex align-items-center text-center">
                            <div
                                className="col-6 py-2 mx-2 d-flex btn sepet"
                                style={{ cursor: 'pointer' }} // Optional: add a cursor style for clickable elements
                            >
                                <i className="bi bi-chat mx-2"></i>Değerlendir
                            </div>
                            <div
                                className="col-6 py-2 mx-2 d-flex btn"
                                style={{ backgroundColor: 'rgb(246, 228, 214)', color: '#FF6000' }}
                            >
                                <strong>Sepete Ekle</strong>
                            </div>
                        </div>
                        <div className="col-10">
                            <p>
                                <small
                                    className="p-2"
                                    style={{ color: '#FF6000', fontSize: '.8em' }}
                                >
                                    <strong>Yorum Yayınlanma Kriterleri</strong>
                                </small>
                            </p>
                            <p>
                                <i className="bi bi-info-circle mx-2"></i>
                                <small>
                                    Değerlendirme yapabilmek için bu ürünü satın almış olmalısınız.
                                </small>
                            </p>
                        </div>
                    </div>


                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12"><strong>Kullanıcı fotoğraf ve videoları</strong></div>
                        <div className="col-2"><Image src="images/bilg4.jpeg" width={100} height={100} className="Image-thumbnail" alt="" />
                        </div>
                        <div className="col-2"><Image src="images/bilg5.jpeg" width={100} height={100} className="Image-thumbnail" alt="" />
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center g-2 degerlendir">
                        <div className="col-3">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="      Değerlendirmelerde ara" aria-label="Username"
                                    aria-describedby="addon-wrapping" />
                                <i className="bi bi-search position-absolute"></i>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                Sırala
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Ürün Puanı
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div>
                                            <div className="dropdown-item form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    <small>Çok iyi (83)</small>
                                                </label>
                                            </div>
                                            <span className="d-flex justify-content-between">

                                                <i className="bi bi-star-fill"></i>
                                            </span>
                                        </div>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Satıcı
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Ürün özelliği
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-end">
                                Sırala
                            </div>
                            <div className="dropup-center dropup mx-3">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Varsayılan
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Varsayılan</a></li>
                                    <li><a className="dropdown-item" href="#">En faydalı soru&cevap</a></li>
                                    <li><a className="dropdown-item" href="#">En yeni soru&cevap</a></li>
                                    <li><a className="dropdown-item" href="#">En eski soru&cevap</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="tab-pane fade" id="pills-soru-cevap" role="tabpanel"
                    aria-labelledby="pills-soru-cevap-tab" tabIndex="0">
                    <div className="row justify-content-center align-items-center g-2">
                        <div className="col-3">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="      Soru ve cevaplarda ara" aria-label="Username"
                                    aria-describedby="addon-wrapping" />
                                <i className="bi bi-search position-absolute"></i>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-end">
                                Sırala
                            </div>
                            <div className="dropup-center dropup mx-3">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Varsayılan
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Varsayılan</a></li>
                                    <li><a className="dropdown-item" href="#">En faydalı soru&cevap</a></li>
                                    <li><a className="dropdown-item" href="#">En yeni soru&cevap</a></li>
                                    <li><a className="dropdown-item" href="#">En eski soru&cevap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            <a href="#" className="btn sepet">Satıcıya Sor</a>
                        </div>
                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Soru</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group flex-nowrap position-relative">
                                <input type="text" className="form-control"
                                    placeholder="Ürünün arttırılabilir max ram kapasitesi nedir?"
                                    aria-label="soru1" aria-describedby="addon-wrapping" disabled />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-start align-items-center g-2 py-4">
                        <div className="col-12">
                            <p className="m-4 mb-0"><strong>Cevap</strong></p>
                        </div>
                        <div className="col-7">
                            <div className="input-group1 cevap flex-nowrap">
                                <div>
                                    <p>Ram arttırabilirsiniz.</p>
                                    <span><small className="text-primary mx-1">TeknoNEXT</small>satıcısı
                                        cevapladı</span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>27 Mart . 1 saat
                                    içerisinde
                                    cevapladı</small>
                            </div>
                            <div className="d-flex justify-content-end my-3 cevap">
                                <small>Bu cevap faydalı mı?</small>
                                <i className="bi bi-hand-thumbs-up mx-3"></i>
                                <i className="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="tab-pane fade" id="pills-taksit-secenekleri" role="tabpanel"
                    aria-labelledby="pills-taksit-secenekleri-tab" tabIndex="0">
                    <div className="row p-3">
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/world.svg" width={100} height={100} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/bonus.svg" width={100} height={100} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/maximum.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/axess.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/card-finans.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/advantage.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/bank-kart.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 taksit">
                            <div className="row justify-content-center flex-column align-items-center g-2">
                                <div className="col">
                                    <div className="col d-flex justify-content-center py-3 banka">
                                        <Image src="images/paraf.svg" width={120} height={120} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> Taksit
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Taksit
                                            Tutarı
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> Toplam Tutar
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 2
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 3
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 3.999,67 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 4
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 2.999,75 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 5
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 6
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.999,83 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 11.999,00 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 7
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 8
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 9
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.395,22 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.556,95 TL
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 10
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 11
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> -
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center text-center">
                                        <div className="col-2 border border-light-subtle py-2"> 12
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 1.045,01 TL
                                        </div>
                                        <div className="col-5 border border-light-subtle py-2"> 12.540,15 TL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <strong className="mx-2 my-3">Önemli Not</strong>

                    <small className="mx-2 my-3"><span className="text-danger">*</span> Yapı Kredi Bankası için
                        vade
                        tutarları
                        ortalama değerlerdir, ödeme adımında
                        değişkenlik gösterebilir.</small>


                    <small className="mx-2 my-3"><span className="text-danger">*</span> Bazı vade tutarları
                        ortalama
                        değerlerdir,
                        ödeme adımında ürünlerin
                        KDV’lerinin farklılıklarından dolayı değişkenlik
                        gösterebilir.</small><br />

                    <small className="mx-2 my-3"><span className="text-danger">*</span> Ödeme esnasında erteleme
                        işlemi
                        seçilen
                        taksitlerde vade farkından dolayı
                        tutar farklılıkları görülebilir.</small>

                    <div className="tab-pane fade" id="pills-alisveris-kredisi" role="tabpanel"
                        aria-labelledby="pills-alisveris-kredisi-tab" tabIndex="0">
                        <div className="row justify-content-center align-items-center g-2 alisveris-kredi">
                            <div className="col-12">
                                <strong>Anlaşmalı bankalar</strong>
                            </div>
                            <div className="col-12">
                                <i className="bi bi-arrow-right mx-3"></i>
                                <span>
                                    Anlaşmalı bankalar arasından müşterisi olduğunuz bankayı seçebilir,
                                </span>
                            </div>
                            <div className="col-12">
                                <i className="bi bi-arrow-right mx-3"></i>
                                <span>
                                    Anlaşmalı bankalar ile çalışmıyorsanız veya mevcut bankanızdan kredi
                                    kullanmak istemiyorsanız DenizBank, ING veya
                                    Fibabanka seçeneği ile devam edebilirsiniz.
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1  d-flex align-items-start text-center">
                                <div className="col taksit">
                                    <div className="row justify-content-center align-items-center g-2">
                                        <div className="cold-flex align-items-center text-center flex-column ">
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col py-2">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col py-2">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col py-1">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col py-2">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col py-2">
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col py-2"> Vade
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col py-2"> 3
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col py-2"> 4
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col py-2"> 6
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col py-2"> 9
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center vade">
                                                <div className="col  py-2"> 12
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-11 d-flex align-items-start text-center py-4">
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/akbank.svg" width={120} height={120} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/yapikredi.svg" width={120} height={120} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/deniz.svg" width={60} height={120} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/fibabanka.svg" width={60} height={60} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/ing.svg" width={60} height={60} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 taksit">
                                    <div
                                        className="row justify-content-center flex-column align-items-center g-2">
                                        <div className="col">
                                            <div className="col-10 d-flex justify-content-center py-3 banka2">
                                                <Image src="images/garanti.svg" width={60} height={60} alt="" />
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> Taksit
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2"> Tutar
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 3.999,67
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 2.999,75
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.999,83
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    11.999,00 TL
                                                </div>
                                            </div>

                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.395,22
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.556,95 TL
                                                </div>
                                            </div>
                                            <div className="col d-flex align-items-center text-center">
                                                <div className="col-5 border border-light-subtle py-2"> 1.045,01
                                                    TL
                                                </div>
                                                <div className="col-5 border border-light-subtle py-2">
                                                    12.540,15 TL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center g-2">
                            <div className="col">
                                <i className="bi bi-info-circle mx-3"></i>
                                <span>Vade ve taksit tutarları tek bir
                                    ürün
                                    üzerinden hesaplanmış olup
                                    sepetteki tutar üzerinden değişiklik gösterebilir.</span>

                                <i className="bi bi-info-circle mx-3"></i>
                                <span>Maksimum vade bilgisayarlarda 12,
                                    tabletlerde 6 aydır. 12.000 TL ve
                                    altındaki cep telefonlarında maksimum vade 12 ay, 12.000 TL üzerindeki
                                    cep telefonlarında 3 aydır. Örneğin, sepetinizde 12.600 TL ve 11.500 TL
                                    değerinde iki ayrı telefon varsa kullanabileceğiniz maksimum vade 3
                                    aydır.</span>
                            </div>

                        </div>
                        <div className="row">
                            <div id="vade-gor" href="#">
                                <div className="col-3 d-flex justify-content-evenly align-items-baseline my-4">

                                    <p>Tüm vadeleri görüntüle </p>
                                    <i className="bi bi-arrow-right"></i>

                                </div>
                            </div>
                        </div>
                        <div id="nasil-kullanirim"
                            className="row justify-content-start flex-column align-items-center g-2">
                            <div className="col px-4">
                                <p className="h4">Nasıl kullanırım?</p>
                            </div>
                            <div className="col d-flex flex-row align-items-start justify-content-start">
                                <i className="bi bi-1-circle-fill"></i>
                                <div className="col-7 d-flex flex-column align-items-start m-2">
                                    <strong>Sepetini oluştur</strong>
                                    <p>Tüm kategori ve satıcılardan istediğiniz ürünlerle belirlenen tutar
                                        aralığında sepetinizi oluşturun.</p>
                                </div>
                            </div>
                            <div className="col d-flex flex-row align-items-start justify-content-start">
                                <i className="bi bi-2-circle-fill"></i>
                                <div className="col-7 d-flex flex-column align-items-start m-2">
                                    <strong>Ödeme sayfasında Alışveriş Kredisi’ni, sonra anlaşmalı
                                        bankalardan birini seç</strong>
                                    <p>Anlaşmalı bankalarda hesabınız yoksa veya mevcut bankanızdan kredi
                                        kullanmak istemiyorsanız DenizBank, ING veya
                                        Fibabanka seçeneği ile devam edebilirsiniz.</p>
                                </div>
                            </div>
                            <div className="col d-flex flex-row align-items-start justify-content-start">
                                <i className="bi bi-3-circle-fill"></i>
                                <div className="col-7 d-flex flex-column align-items-start m-2">
                                    <strong>Başvurunu tamamla</strong>
                                    <p>Seçtiğiniz banka üzerinden giriş yapın ve başvuru için gerekli
                                        bilgileri eksiksiz doldurun.
                                        Bilgilerinizi doldurduktan sonra Hepsiburada’ya geri yönlendirilerek
                                        siparişinizi tamamlamış olacaksınız.</p>
                                </div>
                            </div>
                            <div className="col d-flex flex-row align-items-start justify-content-start">
                                <i className="bi bi-check-circle-fill"></i>
                                <div className="col-7 d-flex flex-column align-items-start m-2">
                                    <strong>İşte bu kadar!</strong>
                                    <p>Krediniz anında onaylanır, siparişleriniz size en kısa sürede
                                        ulaştırılmak üzere hazırlanmaya başlar.</p>
                                </div>
                            </div>
                        </div>
                        <p className="h3 px-5 py-1">Kredi onay süreci nasıl ilerliyor?</p>
                        <div id="kredi-onay" className="row justify-content-center">

                            <div className="col-6 ">
                                <p><strong>Müşterisi olduğunuz banka ile ilerliyorsanız;</strong>
                                    (Akbank, Garanti, Yapıkredi, Denizbank, ING, Fibabanka)</p>
                                <div className="col d-flex justify-content-between">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-11">
                                        Banka ekranlarında sizden istenen bilgileri doldurup başvurunuzu
                                        tamamladıktan sonra başvurunuz saniyeler içinde
                                        onaylanıp* Hepsiburada’ya geri yönlendirilirsiniz.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-between">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-11">
                                        Sepet tutarı kadar kredi anında Hepsiburada’ya aktarılır.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-between">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-11">
                                        Siparişiniz hazırlanarak kargoya verilir.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-between">

                                    <div className="col-12">
                                        *Kredinin onaylanması hakkındaki nihai karar bankaya aittir.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <p><strong>Müşterisi olduğunuz banka ile ilerliyorsanız;</strong>
                                    (Akbank, Garanti, Yapıkredi, Denizbank, ING, Fibabanka)</p>
                                <div className="col d-flex justify-content-center">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-9">
                                        Banka ekranlarında sizden istenen bilgileri doldurup başvurunuzu
                                        tamamladıktan sonra başvurunuz saniyeler içinde
                                        onaylanıp* Hepsiburada’ya geri yönlendirilirsiniz.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-9">
                                        Alışveriş kredinizi DenizBank ile kullanıyorsanız, banka tarafından
                                        telefonunuza kuryeye ait bilgilendirme SMS'i
                                        gönderilir ve kendinize ait dokümanlar belirtmiş olduğunuz adrese
                                        getirilir.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-9">
                                        Doküman imzaların ardından banka tarafından size SMS ile bir link
                                        gönderilir. Bu link ile gelen dokümanları da
                                        onaylamanızın ardından krediniz onaylanır, sepet tutarı
                                        Hepsiburada'ya aktarılır.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-9">
                                        Alışveriş kredinizi ING ya da Fibabanka ile kullanıyorsanız
                                        telefonunuza banka tarafından SMS gönderilir. SMS'teki link
                                        üzerinden bankanın müşterişi olma ve kredi sözleşmelerini
                                        onaylamanızın ardından krediniz onaylanır, sepet tutarı
                                        Hepsiburada'ya akatarılır.
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                    <div className="col-9">
                                        Siparişiniz hazırlanarak kargoya verilir.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-start align-items-center g-2">
                            <div className="col-10 px-4">
                                <p><strong>Alışveriş Kredisi kullanım koşulları</strong></p>
                                <p>Anlaşmalı bankalar, vade seçenekleri ve tüm merak ettiklerinin cevabı
                                    <a href="#" className="text-info">burada</a> .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-iptal-iade" role="tabpanel"
                        aria-labelledby="pills-iptal-iade-tab" tabIndex="0">
                        <div className="row justify-content-center align-items-center g-2 py-5">
                            <div className="col-11">
                                <p><strong>Kolay iade süreci nasıl başlatılır?</strong></p>
                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-1 d-flex justify-content-end align-items-start px-2">
                                    <Image src="images/iadetalebi.svg" width={50} height={50} alt="iade talebi" />
                                </div>
                                <div className="col-10 d-flex flex-column justify-content-start">
                                    <strong>İade talebi oluştur</strong>
                                    <small>Siparişlerim sayfasından iade etmek istediğin ürünü bul ve Kolay
                                        iade et'e tıkla.</small>
                                    <a href="#" className="d-flex justify-content-start my-2">Kolay İade
                                        nedir?</a>

                                </div>

                            </div>

                            <div className="col-12 d-flex">
                                <div className="col-1 d-flex justify-content-end align-items-start px-2">
                                    <Image src="images/iadeyontemi.svg" width={50} height={50} alt="iade talebi" />
                                </div>
                                <div className="col-10 d-flex flex-column justify-content-start">
                                    <strong>İade yöntemini seç</strong>
                                    <small>İade etmek istediğin ürünü kapında iade ile kolayca iade et ya da
                                        Hepsimat noktasına iade ve kargoya teslim
                                        seçeneklerinden birini seç.</small>
                                    <a href="#" className="d-flex justify-content-start my-2"><i
                                        className="bi bi-box-seam-fill mx-2"></i>Kapında İade
                                        nedir?</a>

                                </div>

                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-1 d-flex justify-content-end align-items-start px-2">
                                    <Image src="images/kargokodu.svg" width={50} height={50} alt="iade talebi" />
                                </div>
                                <div className="col-10 d-flex flex-column justify-content-start">
                                    <strong>Kargo kodunu not et</strong>
                                    <small>Yönlendirmeleri tamamla ve ekranda çıkan kargo gönderi kodunu not
                                        et.</small>
                                    <a href="#" className="d-flex justify-content-start my-2">Kargo koduna nasıl
                                        ulaşırım?</a>

                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-1 d-flex justify-content-end align-items-start px-2">
                                    <Image src="images/urunteslimi.svg" width={50} height={50} alt="iade talebi" />
                                </div>
                                <div className="col-10 d-flex flex-column justify-content-start">
                                    <strong>Ürünü teslim et</strong>
                                    <small>YÜrünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve
                                        kargo gönderi koduyla teslim et.</small>
                                    <a href="#" className="d-flex justify-content-start my-2">Ürünü nereye
                                        teslim edebilirim?</a>

                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-1 d-flex justify-content-end align-items-start px-2">
                                    <Image src="images/iadeonayi.svg" width={50} height={50} alt="iade talebi" />
                                </div>
                                <div className="col-10 d-flex flex-column justify-content-start">
                                    <strong>İadeniz onaylansın</strong>
                                    <small>Ürünü tüm aparatlarıyla eksiksiz bir şekilde paketle ve
                                        kargo gönderi koduyla teslim et.</small>
                                    <a href="#" className="d-flex justify-content-start my-2">İade
                                        başvurusunda nasıl bulunabilirim?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-tum-saticilar" role="tabpanel"
                        aria-labelledby="pills-tum-saticilar-tab" tabIndex="0">

                        <div className="row-cols g-2 table-area">
                            <div
                                className="row justify-content-center align-items-center g-2 table-area-baslik">
                                <div className="col-2 my-3 d-flex justify-content-center">
                                    <p className="h5">Fiyat</p>
                                </div>
                                <div className="col-3  my-3 d-flex justify-content-center">
                                    <p className="h5">Satıcı</p>
                                </div>
                                <div className="col-5 my-3 d-flex justify-content-center">
                                    <p className="h5">Kargoya Veriliş Tarihi</p>
                                </div>
                                <div className="col-2"></div>
                            </div>

                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center align-items-center satir">

                                <div className="col-12 d-flex justify-content-center align-items-center py-4 ">

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <strong>11.999,00 TL</strong>
                                    </div>
                                    <div
                                        className="col-3 d-flex justify-content-center align-items-center table-renk">
                                        <small>9,3</small>
                                        <span>iyifiyatburada1</span>
                                    </div>
                                    <div
                                        className="col-5 d-flex justify-content-center align-items-center table-renk">

                                        <p>Tahmini <strong>17 Haziran Cumartesi</strong>
                                            kapında</p>

                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn sepet d-flex"> Sepete Ekle</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div id="Preffer1" className="container my-5">
                <div className="baslik d-flex justify-content-start align-items-end my-3">
                    <p className="h5 mx-5"><strong>Bunlar da ilgini çekebilir</strong></p>
                    <a href="#">
                        <p className="h6"><strong>Tümü &gt;</strong></p>
                    </a>
                </div>
                <div id="prefferAreaCarousel1" className="carousel slide px-5">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="dealoftheday-area d-flex">
                                <div className="preffer text-center">
                                    <Image src="/images/dealoftheday2.jpg" className="Image-fluid Image-thumbnail" alt="preffer1" width={200} height={200} />
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
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#prefferAreaCarousel1"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon onceki" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#prefferAreaCarousel1"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon sonraki" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="row-cols justify-content-center align-items-center g-2 table-area">
                <div className="col-12 text-center my-3">
                    <p className="h5"><strong>Dizüstü Bilgisayar Laptop Kategorisindeki En Çok Satan Ürünler</strong></p>
                </div>
                <a href="#" className="table-link">
                    <div className="row justify-content-center align-items-center g-2 satir">
                        <div className="col-12 d-flex justify-content-start align-items-center">
                            <div className="col-1 text-center">
                                <i className="bi bi-1-circle h3"></i>
                            </div>
                            <div className="col-1 mx-4">
                                <Image src="/images/table1.jpg" className="rounded mx-auto d-block" alt="table1" width={100} height={100} />
                            </div>
                            <div className="col-6 d-inline table-aciklama align-items-baseline">
                                <span>Monster Abra A5 V16.7 Intel Core i5-11400H 8GB RAM 500GB SSD 4GB GTX16...</span>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <span>%8 <br />indirim</span>
                                    <div className="col d-flex flex-column mx-2 align-items-start">
                                        <small><s>18.000,00 TL</s></small>
                                        <strong>16.000,00 TL</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 mx-4">
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar progress-bar-striped" style={{ width: '36%' }}></div>
                                </div>
                            </div>
                            <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                                <span>%34</span> <i className="bi bi-circle-fill mx-4"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            <a href="#" className="table-link">
                <div className="row justify-content-center align-items-center g-2 satir">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <div className="col-1 text-center">
                            <i className="bi bi-6-circle h3"></i>
                        </div>
                        <div className="col-1 mx-4">
                            <Image src="/images/table6.jpg" className="rounded mx-auto d-block" alt="table6" width={100} height={100} />
                        </div>
                        <div className="col-6 d-inline table-aciklama align-items-baseline">
                            <span>HP Pavilion Gaming i5-10300H 8GB 512GB SSD GTX1650Ti...</span>
                            <div className="col d-flex justify-content-center align-items-center">
                                <span>%12 <br />indirim</span>
                                <div className="col d-flex flex-column mx-2 align-items-start">
                                    <small><s>19.999,00 TL</s></small>
                                    <strong>17.599,00 TL</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-4">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: '42%' }}></div>
                            </div>
                        </div>
                        <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                            <span>%42</span> <i className="bi bi-caret-up-fill mx-4"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#" className="table-link">
                <div className="row justify-content-center align-items-center g-2 satir">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <div className="col-1 text-center">
                            <i className="bi bi-7-circle h3"></i>
                        </div>
                        <div className="col-1 mx-4">
                            <Image src="/images/table7.jpg" className="rounded mx-auto d-block" alt="table7" width={100} height={100} />
                        </div>
                        <div className="col-6 d-inline table-aciklama align-items-baseline">
                            <span>Lenovo IdeaPad Gaming 3 AMD Ryzen 5 4600H 8GB 256GB SSD...</span>
                            <div className="col d-flex justify-content-center align-items-center">
                                <span>%15 <br />indirim</span>
                                <div className="col d-flex flex-column mx-2 align-items-start">
                                    <small><s>15.499,00 TL</s></small>
                                    <strong>13.174,00 TL</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-4">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: '38%' }}></div>
                            </div>
                        </div>
                        <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                            <span>%38</span> <i className="bi bi-caret-down-fill mx-4"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#" className="table-link">
                <div className="row justify-content-center align-items-center g-2 satir">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <div className="col-1 text-center">
                            <i className="bi bi-8-circle h3"></i>
                        </div>
                        <div className="col-1 mx-4">
                            <Image src="/images/table8.jpg" className="rounded mx-auto d-block" alt="table8" width={100} height={100} />
                        </div>
                        <div className="col-6 d-inline table-aciklama align-items-baseline">
                            <span>Dell G15 Intel Core i7 10870H 16GB 512GB SSD RTX3060...</span>
                            <div className="col d-flex justify-content-center align-items-center">
                                <span>%10 <br />indirim</span>
                                <div className="col d-flex flex-column mx-2 align-items-start">
                                    <small><s>22.999,00 TL</s></small>
                                    <strong>20.699,00 TL</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-4">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                            <span>%45</span> <i className="bi bi-caret-up-fill mx-4"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#" className="table-link">
                <div className="row justify-content-center align-items-center g-2 satir">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <div className="col-1 text-center">
                            <i className="bi bi-9-circle h3"></i>
                        </div>
                        <div className="col-1 mx-4">
                            <Image src="/images/table9.jpg" className="rounded mx-auto d-block" alt="table9" width={100} height={100} />
                        </div>
                        <div className="col-6 d-inline table-aciklama align-items-baseline">
                            <span>MSI GF63 Thin Intel Core i5 10300H 8GB 256GB SSD GTX1650...</span>
                            <div className="col d-flex justify-content-center align-items-center">
                                <span>%18 <br />indirim</span>
                                <div className="col d-flex flex-column mx-2 align-items-start">
                                    <small><s>17.499,00 TL</s></small>
                                    <strong>14.349,00 TL</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-4">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                        <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                            <span>%40</span> <i className="bi bi-circle-fill mx-4"></i>
                        </div>
                    </div>
                </div>
            </a>

            <a href="#" className="table-link">
                <div className="row justify-content-center align-items-center g-2 satir">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <div className="col-1 text-center">
                            <i className="bi bi-1-circle h3"></i>
                            <i className="bi bi-0-circle h3"></i>
                        </div>
                        <div className="col-1 mx-4">
                            <Image src="/images/table10.jpg" className="rounded mx-auto d-block" alt="table10" width={100} height={100} />
                        </div>
                        <div className="col-6 d-inline table-aciklama align-items-baseline">
                            <span>Asus TUF Gaming F15 Intel Core i5 10300H 8GB 512GB SSD...</span>
                            <div className="col d-flex justify-content-center align-items-center">
                                <span>%20 <br />indirim</span>
                                <div className="col d-flex flex-column mx-2 align-items-start">
                                    <small><s>16.999,00 TL</s></small>
                                    <strong>13.599,00 TL</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-4">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
                                aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: '37%' }}></div>
                            </div>
                        </div>
                        <div className="col-2 mx-2 yuzde d-flex justify-content-start align-items-center mx-4">
                            <span>%37</span> <i className="bi bi-caret-down-fill mx-4"></i>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
};

export default Firstp;