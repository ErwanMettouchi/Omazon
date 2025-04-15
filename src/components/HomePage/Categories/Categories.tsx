import { Link } from "react-router";
import categories from "../../../data/categories.json";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categories">
      <h2 className="section-title">Catégories à l'honneur</h2>
      <section className="categories-list">
        {categories.map((category) => {
          return (
            <Link to={`/category/${category.slug}`} key={category.id}>
              <article className="category">
                <div className="category-img">
                  <div className="round-background">
                    <img
                      src={`/resources/categories/${category.image}`}
                      alt="Informatique"
                    />
                  </div>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </article>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
