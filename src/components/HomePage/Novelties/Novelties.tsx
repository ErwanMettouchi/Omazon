import { Link } from "react-router";
import products from "../../../data/products.json";
import "./Novelties.css";
import type { IProducts } from "../../../@types/index.d";

interface INoveltiesProps {
  addProduct: (product: IProducts) => void;
}

export default function Novelties({ addProduct }: INoveltiesProps) {
  return (
    <div className="novelties">
      <h2 className="section-title">Nouveautés</h2>
      <section className="novelties-list">
        {products.slice(0, 4).map((product) => {
          return (
            <article className="novelty" key={product.id}>
              <Link to={`/product/${product.slug}`} key={product.id}>
                <div className="novelty-img">
                  <img
                    src={`/resources/products/${product.image}`}
                    alt={product.title}
                  />
                </div>
              </Link>
              <h3 className="novelty-title">
                {product.title.length > 50
                  ? `${product.title.slice(0, 100)}...`
                  : product.title}
              </h3>
              <p className="novelty-price">
                <span className="novelty-euros">
                  {Math.floor(product.price)}
                </span>
                <sup className="novelty-cents">
                  {product.price.toFixed(2).split(".")[1]} €
                </sup>
              </p>
              <button type="button" onClick={() => addProduct(product)}>
                Ajouter au panier
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
