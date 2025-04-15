import { Link } from "react-router";
import products from "../../../data/products.json";
import "./Products.css";

export default function Products() {
  return (
    <div className="products">
      <h2 className="section-title">Tous nos produits</h2>
      <section className="products-list">
        {products.map((product) => {
          return (
            <article className="product" key={product.id}>
              <Link to={`/product/${product.slug}`} key={product.id}>
                <div className="product-img">
                  <img
                    src={`/resources/products/${product.image}`}
                    alt={product.title}
                  />
                </div>
              </Link>
              <h3 className="product-title">
                {product.title.length > 100
                  ? `${product.title.slice(0, 100)}...`
                  : product.title}
              </h3>
              <p className="product-price">
                <span className="price-euros">{Math.floor(product.price)}</span>
                <sup className="price-cents">
                  {product.price.toFixed(2).split(".")[1]} €
                </sup>
              </p>
              <button type="button">Ajouter au panier</button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
