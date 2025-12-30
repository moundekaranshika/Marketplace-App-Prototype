export default function SellerTable({ sellers, onBuy }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Seller</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        {sellers.map((s, i) => (
          <tr key={i}>
            <td>{s.sellerId}</td>
            <td>₹{s.price}</td>
            <td>
              <button onClick={() => onBuy(s)}>Buy</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
