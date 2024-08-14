import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductManagement.module.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
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
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    const handleUpdate = async (product) => {
        try {
            await axios.put(`http://smart.xilyor.com/update_product/${product.id}`, product);
            setProducts(products.map(p => p.id === product.id ? product : p));
            setEditingProduct(null);
        } catch (err) {
            setError('Failed to update product');
        }
    };

    const handleImageUpdate = async (productId, event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image1', file);

        try {
            await axios.put(`http://smart.xilyor.com/update_product_image/${productId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            fetchProducts();
        } catch (err) {
            setError('Failed to update product image');
        }
    };

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`http://smart.xilyor.com/delete_product/${productId}`);
                setProducts(products.filter(p => p.id !== productId));
            } catch (err) {
                setError('Failed to delete product');
            }
        }
    };

    if (loading) return <div className="text-center py-5 text-white">Loading...</div>;
    if (error) return <div className="text-center py-5 text-danger">{error}</div>;

    return (
        <div className={`${styles.darkBackground} min-vh-100 py-5`}>
            <div className="container">
                <h1 className="text-white text-center mb-5">Product Showcase</h1>
                <div className="row g-4">
                    {products.map(product => (
                        <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                            <div className={`${styles.productCard} card h-100`}>
                                {product.images?.image1 && (
                                    <img 
                                        src={`data:image/jpeg;base64,${product.images.image1}`}
                                        alt={product.name}
                                        className="card-img-top"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                )}
                                <div className="card-body d-flex flex-column">
                                    {editingProduct === product.id ? (
                                        <>
                                            <input 
                                                className="form-control mb-2"
                                                value={product.name}
                                                onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, name: e.target.value} : p))}
                                            />
                                            <input 
                                                className="form-control mb-2"
                                                value={product.price}
                                                onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, price: e.target.value} : p))}
                                                type="number"
                                            />
                                            <input 
                                                className="form-control mb-2"
                                                value={product.stock_quantity}
                                                onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, stock_quantity: e.target.value} : p))}
                                                type="number"
                                            />
                                            <textarea 
                                                className="form-control mb-2"
                                                value={product.description}
                                                onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, description: e.target.value} : p))}
                                                rows="3"
                                            />
                                            <button
                                                onClick={() => handleUpdate(product)}
                                                className="btn btn-success mb-2"
                                            >
                                                Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditingProduct(null)}
                                                className="btn btn-danger"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <h5 className="card-title text-white">{product.name}</h5>
                                            <p className="card-text text-light">Price: ${product.price}</p>
                                            <p className="card-text text-light">Stock: {product.stock_quantity}</p>
                                            <p className="card-text text-light">{product.description}</p>
                                            <div className="mt-auto">
                                                <button
                                                    onClick={() => setEditingProduct(product.id)}
                                                    className="btn btn-primary w-100 mb-2"
                                                >
                                                    Edit Product
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="btn btn-danger w-100 mb-2"
                                                >
                                                    Delete Product
                                                </button>
                                                <div className="mt-2">
                                                    <input 
                                                        type="file"
                                                        onChange={(e) => handleImageUpdate(product.id, e)}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductManagement;