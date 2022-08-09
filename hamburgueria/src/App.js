import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";
import TotalCart from "./components/TotalCart";
import "./App.css";
//Passar o array de produtos pra uma const separada -> eu daria ao setproducts o resultado do filter com a const de referência

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [result, setResultSearch] = useState("");
  const [text, setText] = useState("");

  const showProductsFiltered = () => {
    if (text === "") return;
    const re = new RegExp(text, "i");
    const fp = products.filter((product) => re.test(product.name));
    setFilteredProducts(fp);
  };

  const resultSearch = () => {
    if (text === "") return;
    const re = new RegExp(text, "i");
    const fp = products.filter((product) =>
      re.test(product.name || product.category)
    );
    setFilteredProducts(fp);
    setResultSearch(`Resultados para: ${text}`);
  };

  return (
    <div className="App">
      <header className="title">
        <p className="h1-title">
          Burguer <span>Kenzie</span>
        </p>
      </header>

      <input
        className="search-input"
        placeholder="Digitar pesquisa"
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button
        className="button-search"
        onClick={(showProductsFiltered, resultSearch)}
      >
        Pesquisar
      </button>
      <h2>{result}</h2>
      <div className="container">
        <div className="container-card">
          <MenuContainer
            products={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
        <div className="cart-container">
          <div className="cart-ti">
            <h3> Carrinho de compras</h3>
          </div>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          <TotalCart currentSale={currentSale} product={products} />
        </div>
      </div>
    </div>
  );
}

export default App;

//Quando clicar em "Adicionar ao carrinho", ele precisa pegar o id do que estou clicando e adicionar em uma div
