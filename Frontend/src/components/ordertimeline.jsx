export default function OrderTimeline({ timeline }) {
  return (
    <div>
      <h3>Order Status</h3>
      {timeline.map((t, i) => (
        <p key={i}>✔ {t.status}</p>
      ))}
    </div>
  );
}
