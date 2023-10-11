import React, { useEffect, useState } from "react";
import CollapseTable from "../../components/Collapse/CollapseTable";
import HTTP from "../../config/http";
import { handleError } from "@/config/utils";

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const _getProducts = () => {
    HTTP("GET", "https://dummyjson.com/products/1")
      .then((res) => setProductList(res))
      .catch((err) => handleError("Ha sucedido un error al obtener los datos"));
  };

  useEffect(() => {
    _getProducts();
  }, []);

  console.log(productList);

  return (
    <div>
      <h1> Render Products</h1>
    </div>
  );
};

export default Products;
