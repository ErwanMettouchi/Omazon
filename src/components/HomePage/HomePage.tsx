import type { IProducts } from "../../@types/index.d";
import Categories from "./Categories/Categories";
import "./HomePage.css";
import Novelties from "./Novelties/Novelties";
import Products from "./Products/Products";

interface IHomePageProps {
  addProduct: (product: IProducts) => void;
}

export default function HomePage({ addProduct }: IHomePageProps) {
  return (
    <main>
      <Categories />
      <Novelties addProduct={addProduct} />
      <Products addProduct={addProduct} />
    </main>
  );
}
