import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import styles from './PreferredArea.module.css';

const PreferredArea = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
=======
      const response = await axios.get('http://smart.xilyor.com/products');
      const productsWithImages = await Promise.all(response.data.map(async (product) => {
        try {
          const imageResponse = await axios.get(`http://smart.xilyor.com/product_images/${product.id}`);
          return { ...product, images: imageResponse.data.images };
        } catch (error) {
          console.log(`No images found for product ${product.id}`);
          return { ...product, images: null };
        }
      }));
      setProducts(productsWithImages);
      setLoading(false);
    } catch (err) {
>>>>>>> 3f85eb477103b72ecc8cb64566cb397150d70aa8
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const productChunks = chunkArray(products, 4);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="Preffer1" className={`container my-5 ${styles.preferredArea}`}>
      <div className={`d-flex justify-content-between align-items-center my-3 ${styles.header}`}>
        <h2 className={styles.title}><strong>Sana özel öneriler</strong></h2>
        <Link href="#" className={styles.viewAll}><strong>Tümü &gt;</strong></Link>
      </div>
      
      <Carousel className={styles.carousel}>
        {productChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className={`d-flex flex-wrap justify-content-around ${styles.productContainer}`}>
              {chunk.map((product) => (
                <div key={product.id} className={`${styles.product} text-center`}>
                  <Image 
                    src={product.images?.image1 ? `data:image/jpeg;base64,${product.images.image1}` : "/images/placeholder.jpg"} 
                    className="img-fluid img-thumbnail" 
                    alt={product.name} 
                    width={150} 
                    height={150} 
                  />
                  <small>{product.credit}</small>
                  <p className={styles.productName}>{product.name}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`bi bi-star-fill ${i < product.rating ? styles.filled : ''}`}></i>
                    ))}
                    <span>&nbsp;{product.reviewCount}</span>
                  </div>
                  <p className={`h6 ${styles.price}`}><strong>{product.price} TL</strong></p>
                  <span className={styles.discount}>{product.discount_rate_display}% indirim</span>
                  <button className={styles.addToCart}>Sepete Ekle</button>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PreferredArea;
