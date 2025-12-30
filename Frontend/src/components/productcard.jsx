import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <Link to={`/product/${product._id}`}>View</Link>
    </div>
  );
}
