export default function ReviewCard({ review }) {
  return (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <p>Rating: {review.rating}/10</p>
      <p>{review.comment}</p>
      {review.verifiedBuyer && <small>✔ Verified Buyer</small>}
    </div>
  );
}
