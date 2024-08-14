import React, { useState, useEffect } from 'react';
import styles from './AdminAddProduct.module.css';

const AdminAddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
        price_display_value: '',
        category_id: '',
        status: 'stock',
        discount_rate_display: '',
        catalog_name: '',
        original_price_value: ''
    });
    const [images, setImages] = useState({
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null,
        image7: null,
        image8: null,
        image9: null,
        image10: null
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://smart.xilyor.com/categories');
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            } else {
                throw new Error('Failed to fetch categories');
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            setError('Failed to load categories. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        setImages(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // First, add the product
            const productResponse = await fetch('http://smart.xilyor.com/add_product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (!productResponse.ok) {
                const errorData = await productResponse.json();
                throw new Error(errorData.error || 'Failed to add product');
            }

            const productData = await productResponse.json();
            const productId = productData.id;

            // Then, upload images
            const formData = new FormData();
            formData.append('product_id', productId);
            Object.entries(images).forEach(([key, value]) => {
                if (value) {
                    formData.append(key, value);
                }
            });

            const imageResponse = await fetch('http://smart.xilyor.com/add_product_image', {
                method: 'POST',
                body: formData
            });

            if (!imageResponse.ok) {
                throw new Error('Failed to upload images');
            }

            setSuccess('Product and images added successfully!');
            // Reset form
            setProduct({
                name: '',
                description: '',
                price: '',
                stock_quantity: '',
                price_display_value: '',
                category_id: '',
                status: 'stock',
                discount_rate_display: '',
                catalog_name: '',
                original_price_value: ''
            });
            setImages({
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                image5: null,
                image6: null,
                image7: null,
                image8: null,
                image9: null,
                image10: null
            });
        } catch (error) {
            console.error('Error adding product:', error);
            setError(error.message || 'Error adding product. Please try again.');
        }
    };

    return (
        <div className={`${styles.darkBackground} min-vh-100 py-5`}>
            <div className="container">
                <h2 className="text-white mb-4">Add New Product</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={handleSubmit} className={styles.productForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">Name</label>
                        <input type="text" className={`form-control ${styles.darkInput}`} id="name" name="name" value={product.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label text-white">Description</label>
                        <textarea className={`form-control ${styles.darkInput}`} id="description" name="description" value={product.description} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label text-white">Price</label>
                        <input type="number" step="0.01" className={`form-control ${styles.darkInput}`} id="price" name="price" value={product.price} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock_quantity" className="form-label text-white">Stock Quantity</label>
                        <input type="number" className={`form-control ${styles.darkInput}`} id="stock_quantity" name="stock_quantity" value={product.stock_quantity} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price_display_value" className="form-label text-white">Price Display Value</label>
                        <input type="text" className={`form-control ${styles.darkInput}`} id="price_display_value" name="price_display_value" value={product.price_display_value} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category_id" className="form-label text-white">Category</label>
                        <select className={`form-select ${styles.darkInput}`} id="category_id" name="category_id" value={product.category_id} onChange={handleChange} required>
                            <option value="">Select a category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label text-white">Status</label>
                        <select className={`form-select ${styles.darkInput}`} id="status" name="status" value={product.status} onChange={handleChange}>
                            <option value="stock">In Stock</option>
                            <option value="Arrivage">Arriving</option>
                            <option value="Commande">Ordered</option>
                            <option value="Epuisé">Out of Stock</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discount_rate_display" className="form-label text-white">Discount Rate</label>
                        <input type="number" step="0.01" className={`form-control ${styles.darkInput}`} id="discount_rate_display" name="discount_rate_display" value={product.discount_rate_display} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="catalog_name" className="form-label text-white">Catalog Name</label>
                        <input type="text" className={`form-control ${styles.darkInput}`} id="catalog_name" name="catalog_name" value={product.catalog_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="original_price_value" className="form-label text-white">Original Price Value</label>
                        <input type="number" step="0.01" className={`form-control ${styles.darkInput}`} id="original_price_value" name="original_price_value" value={product.original_price_value} onChange={handleChange} />
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div key={num} className="mb-3">
                            <label htmlFor={`image${num}`} className="form-label text-white">Image {num}</label>
                            <input type="file" className={`form-control ${styles.darkInput}`} id={`image${num}`} name={`image${num}`} onChange={handleImageChange} accept="image/*" />
                        </div>
                    ))}
                    <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AdminAddProduct;