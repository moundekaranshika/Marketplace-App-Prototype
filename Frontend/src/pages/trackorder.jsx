import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import OrderTimeline from "Frontend/components/OrderTimeline";

export default function TrackOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    API.get(`/orders/${id}`).then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return <OrderTimeline timeline={order.timeline} />;
}
