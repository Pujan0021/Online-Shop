import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiData } from "./API/api";
import "../Css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await apiData();
      const found = data.find((item) => item.id === parseInt(id));
      setProduct(found);
      setLoading(false);
    };
    fetchSingleProduct();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

  return (
    <div className="product-detail">
      <div className="sub">
        <button className="back" onClick={handleBack}>
          ←Back
        </button>
        <img className="image" src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="rating">
          {product.rating} ⭐ <button className="addToCart">Add to Cart</button>
        </p>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
