import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const placeOrder = () => {
    API.post("/orders", {
      userId: "demo",
      productId: "demo",
      sellerId: "demo"
    }).then(res => navigate(`/track/${res.data._id}`));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
