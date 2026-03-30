import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../Componet/Header";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrd";
function HomePage({ cart , LoadData}) {
  const [products, setProducts] = useState([]);
 const [searchParam] = useSearchParams()
  const search = searchParam.get('search');

  useEffect(() => {
    const getHomwPage = async () =>
  { const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data)}
      getHomwPage()
   
  }, [search]);
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
