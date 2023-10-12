import React, { useEffect, useState } from "react";
import { HTTP } from "../../config/http";
import { handleError, currency } from "@/config/utils";
import Button from "@/components/form/Button";
import ModalAdd from "@/components/Modal/ModalAdd";
import ModalDelete from "@/components/Modal/ModalDelete";
import Spinner from "@/components/form/Spinner";

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });
  const [remove, setRemove] = useState({
    visible: false,
    data: false,
  });
  const _getProducts = () => {
    HTTP("GET", "https://dummyjson.com/products/")
      .then((res) => {
        setProductList(res.products);
        setIsLoading(false);
      })
      .catch((err) => handleError("Ha sucedido un error al obtener los datos"));
  };

  useEffect(() => {
    _getProducts();
  }, []);

  const onClose = () => {
    setVisible({ visible: false, data: false });
  };

  const onCloseDelete = () => {
    setRemove({ visible: false, data: false });
  };

  if (isLoading) return <Spinner />;
  return (
    <div className="container mt-5">
      <h1> Lista de Productos</h1>
      <div className="d-flex justify-content-end mb-2">
        <Button
          name="Añadir"
          icon="add"
          onClick={() => setVisible({ visible: true, data: false })}
        />
      </div>
      <table className="table table-hover">
        <thead>
          <tr className="table-success">
            <th>Producto</th>
            <th width="600px">Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((i) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{i.description}</td>
              <td>$ {currency(i.price, 2)}</td>
              <td>
                <button
                  onClick={() => setRemove({ visible: true, data: i })}
                  className="btn"
                >
                  <i className="material-icons">delete</i>
                </button>

                <button
                  onClick={() => setVisible({ visible: true, data: i })}
                  className="btn"
                >
                  <i className="material-icons">edit</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalAdd
        visible={visible.visible}
        onClose={onClose}
        data={visible.data}
      />
      <ModalDelete
        visible={remove.visible}
        onClose={onCloseDelete}
        data={remove.data}
        title="Estas seguro de eliminar el producto?"
      />
    </div>
  );
};

export default Products;
