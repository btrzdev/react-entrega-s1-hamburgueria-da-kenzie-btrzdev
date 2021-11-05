import "./style.css";
export default function TotalCart({ currentSale, product }) {
  const totalCart = () => {
    const reducer = currentSale.reduce((previousValue, currentValue) => {
      return currentValue.price + previousValue;
    }, 0);
    return reducer.toFixed(2);
  };

  return (
    <div className="div-price">
      {" "}
      <div className="total">Total</div>
      <div className="total-price"> R$ {totalCart(currentSale)}</div>
    </div>
  );
}
