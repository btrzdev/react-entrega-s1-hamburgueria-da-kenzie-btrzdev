import "./style.css";
export default function Cart({ currentSale, setCurrentSale }) {
  const remove = (product) => {
    const filteredCart = currentSale.filter((item) => {
      return item.id !== product.id;
    });
    setCurrentSale(filteredCart);
  };

  return currentSale.map((product, index) => {
    return (
      <div key={index} className="cart-div">
        {" "}
        <div className="cart-image">
          <img src={product.img} alt="logo" className="cart-img" />
        </div>
        <div className="cart-name-category">
          <p className="cart-name">{product.name}</p>
          <p className="cart-category">{product.category}</p>
        </div>
        <p className="cart-hidden">{product.price}</p>
        <button onClick={() => remove(product)} className="cart-remove">
          {" "}
          Remover{" "}
        </button>
      </div>
    );
  });
}
