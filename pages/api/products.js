import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${process.env.API_URL}/products`);
    const productsWithImages = await Promise.all(response.data.map(async (product) => {
      try {
        const imageResponse = await axios.get(`${process.env.API_URL}/product_images/${product.id}`);
        return { ...product, images: imageResponse.data.images };
      } catch (error) {
        console.log(`No images found for product ${product.id}`);
        return { ...product, images: null };
      }
    }));
    res.status(200).json(productsWithImages);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}