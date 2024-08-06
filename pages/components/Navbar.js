import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div id="nav-fullwidth" className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#" className="nav-link active" aria-current="page"><span>Elektronik</span></Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link">Moda</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Ev, Yaşam, Kırtasiye, Ofis</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Oto, Bahçe, Yapı Market</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Anne, Bebek, Oyuncak</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Spor, Outdoor</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Kozmetik, Kişisel Bakım</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Süpermarket, Pet Shop</Link>
                </li>
                <li className="nav-item">
                  <Link href="#"className="nav-link">Kitap, Müzik, Film, Hobi</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;