import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#" className="nav-link active" aria-current="page">Elektronik</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Moda</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Ev, Yaşam, Kırtasiye, Ofis</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Oto, Bahçe, Yapı Market</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Anne, Bebek, Oyuncak</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Spor, Outdoor</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Kozmetik, Kişisel Bakım</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Süpermarket, Pet Shop</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">Kitap, Müzik, Film, Hobi</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <hr />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
