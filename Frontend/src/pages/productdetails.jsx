import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "Frontend/services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products`).then(res => {
      setProduct(res.data.find(p => p._id === id));
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => navigate("/cart")}>Add to Cart</button>
      <p>✔ 10-Point Authenticity Verified</p>
    </div>
  );
}
