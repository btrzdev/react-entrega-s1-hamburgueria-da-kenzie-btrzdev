import "./style.css";
export default function Product({ product, setCurrentSale, currentSale }) {
  const add = () => {
    if (!currentSale.some((item) => item.id === product.id)) {
      setCurrentSale([...currentSale, product]);
    }
  };

  return (
    <div className="product-card">
      {" "}
      <div className="product-background">
        <img src={product.img} alt="logo" className="product-img" />
      </div>
      <p className="product-title">{product.name}</p>
      <p className="product-category">{product.category}</p>
      <p className="product-price"> R$ {product.price}</p>
      <button className="product-add" type="button" onClick={() => add()}>
        {" "}
        Adicionar
      </button>
    </div>
  );
}
