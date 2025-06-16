import { Link } from "react-router";
import products from "../../../data/products.json";
import "./Products.css";
import { useEffect } from "react";
import sanitizeHtml from "sanitize-html";
import type { IProducts } from "../../../@types/index.d";

interface IProductsProps {
  addProduct: (product: IProducts) => void;
}

export default function Products({ addProduct }: IProductsProps) {
  console.log("a");

  return (
    <div className="products">
      <h2 className="section-title">Tous nos produits</h2>
      <section className="products-list">
        {products.map((product) => {
          return (
            <article className="product" key={product.id}>
              <Link to={`/product/${product.slug}`} key={product.id}>
                <div className="product-img">
                  {(product.tag && typeof product.tag !== "number" && (
                    <span
                      className={`product-tag ${
                        ["choice", "new", "best-seller", "flash"].includes(
                          product.tag.type
                        )
                          ? product.tag.type
                          : ""
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: product.tag.text,
                      }}
                    />
                  )) ||
                    null}
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
