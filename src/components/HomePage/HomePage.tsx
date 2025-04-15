import Categories from "./Categories/Categories";
import "./HomePage.css";
import Novelties from "./Novelties/Novelties";
import Products from "./Products/Products";

export default function HomePage() {
  return (
    <main>
      <Categories />
      <Novelties />
      <Products />
    </main>
  );
}
