import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 10, background: "#000", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", marginRight: 15 }}>SneakerMart</Link>
      <Link to="/orders" style={{ color: "#fff" }}>Orders</Link>
    </div>
  );
}
