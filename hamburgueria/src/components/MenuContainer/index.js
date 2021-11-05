import "./style.css";
import Product from "../Product";
export default function MenuContainer({
  products,
  setCurrentSale,
  currentSale,
}) {
  return products.map((product) => {
    return (
      <Product
        product={product}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      />
    );
  });
}
