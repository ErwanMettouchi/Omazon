import categories from "../../../data/categories.json";
import "./HeaderForm.css";

export default function () {
  return (
    <div className="header-form">
      <form action="">
        <select name="categories">
          <option value="all">Toutes nos catégories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher sur Omazon"
        />
        <button type="submit" className="header-form-button">
          <img src="/resources/icons/search.svg" alt="" />
        </button>
      </form>
    </div>
  );
}
