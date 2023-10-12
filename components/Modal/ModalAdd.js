import { HTTP } from "@/config/http";
import { handleError, handleSucess } from "@/config/utils";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../form/Input";
const ModalAdd = (props) => {
  const { visible, onClose, data } = props;

  const [isEdit, setIsEdit] = useState(false);

  const [title, setTitle] = useState("");

  const _send = () => {
    HTTP(
      `${isEdit ? "PUT" : "POST"}`,
      `https://dummyjson.com/products/${isEdit ? props.data.id : "add"}`,
      {
        title,
      }
    )
      .then((res) => {
        onClose(res);
        handleSucess(
          `El ${res.title} se ha ${
            isEdit ? "actualizado" : "añadido"
          } con exito`
        );
      })
      .catch((err) =>
        handleError("Ha ocurrido un error al añadir el producto")
      );
  };

  useEffect(() => {
    if (props.data) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [props.data]);

  useEffect(() => {
    if (isEdit) {
      setTitle("iPhone Galaxy +1");
    } else {
      setTitle("BMW Pencil");
    }
  }, [isEdit]);

  return (
    <div>
      <Modal className="modal-container" show={visible} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              {isEdit ? "Actualizar producto" : "Agregar nuevo producto"}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input name='Título del producto' value={title} onChange={setTitle} placeholder="Producto" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={_send}>
            {isEdit ? "Actualizar" : "Añadir"}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAdd;
