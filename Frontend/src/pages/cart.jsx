import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}
