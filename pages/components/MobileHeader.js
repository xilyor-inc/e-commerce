import React, { useState } from 'react';
import styles from './MobileHeader.module.css';

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.mobileContainer}>
      <header className={styles.header}>
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <img src="/logo.png" alt="Hepsiburada" className={styles.logo} />
        <button className={styles.cartButton}>🛒</button>
      </header>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Rechercher un produit, une catégorie ou une marque" className={styles.searchInput} />
        <button className={styles.searchButton}>Chercher</button>
      </div>

      <div className={styles.featuredItem}>
        {/* Featured item card */}
      </div>

      <div className={styles.brandsContainer}>
        <h2>Marques populaires</h2>
        <div className={styles.brandScroll}>
          {/* Horizontal scrolling brand logos */}
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {/* Mobile menu items */}
        </div>
      )}
    </div>
  );
};

export default MobileHeader;