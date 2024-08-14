import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DealOfTheDay.module.css';

const DealOfTheDay = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsWithImages = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('http://smart.xilyor.com/products');
        console.log('Products response:', response);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const productsData = await response.json();
        console.log('Products data:', productsData);

        // Fetch images for each product
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          console.log(`Fetching images for product ID: ${product.id}`);
          const imageResponse = await fetch(`http://smart.xilyor.com/product_images/${product.id}`);
          if (imageResponse.ok) {
            const imageData = await imageResponse.json();
            console.log(`Image data for product ${product.id}:`, imageData);
            return { ...product, images: imageData };
          }
          return product;
        }));

        console.log('Products with images:', productsWithImages);
        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProductsWithImages();
  }, []);

  console.log('Current state - products:', products);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const mainProduct = products[0];
  const mainImage = mainProduct?.images?.[0]?.image1 || '/images/dealoftheday1.jpg';

  return (
    <div className={styles.dealOfTheDay}>
      <div className={styles.header}>
        <h2 className={styles.title}>Süper Fiyat, Süper Teklif</h2>
        <Link href="/all-deals">
          <div className={styles.viewAll}>Tümü &gt;</div>
        </Link>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          <div className={styles.carouselItem}>
            <div className={styles.dealArea}>
              <div className={styles.mainDeal}>
                <Image src={mainImage} className={styles.image} alt="deal of the day" width={200} height={200} layout="responsive" />
              </div>
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className={styles.deal}>
                  <p className={styles.dealTitle}>{product.name}</p>
                  <Image 
                    src={product.images?.[0]?.image1 || "/images/dealoftheday2.jpg"} 
                    className={styles.image} 
                    alt={product.name} 
                    width={150} 
                    height={150} 
                    layout="responsive" 
                  />
                  <span className={styles.price}>{product.price_display_value || `${product.price} TL`}</span>
                  <button className={styles.addToCart}>Sepete Ekle</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className={`${styles.carouselControl} ${styles.prev}`} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`${styles.carouselControl} ${styles.next}`} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default DealOfTheDay;