import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Componet/Header";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrd";
function HomePage({ cart , LoadData}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomwPage = async () =>
  { const response = await axios.get("/api/products")
      setProducts(response.data)}
      getHomwPage()
   
  }, []);
  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
 <ProductGrid products={products} LoadData={LoadData}/>
      </div>
    </>
  );
}

export default HomePage;
