const products = [
  { name: 'Gâteau patate douce', price: 450, was: 600, eur: 9 },
  { name: 'Napolitaine (box of 6)', price: 300, eur: 6 },
];

export default function Shop() {
  return (
    <main>
      <h1>Shop</h1>
      {products.map((p) => (
        <div key={p.name}>
          <h2>{p.name}</h2>
          {p.was && <s>Rs {p.was}</s>} <strong>Rs {p.price}</strong> <span>(€{p.eur})</span>
          <span className="badge">Only 2 left - offer ends in 10 minutes!</span>
          <button>Add to cart</button>
        </div>
      ))}
      <p>A delivery fee of Rs 150 is added at the payment step.</p>
      <button>Continue</button>
    </main>
  );
}
