import { HTTP } from "@/config/http";
import { handleError, handleSucess } from "@/config/utils";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalAdd = (props) => {
  const { title = "", visible, onClose, data } = props;

  const [isEdit, setIsEdit] = useState(false);

  const _send = () => {
    HTTP(
      `${isEdit ? "PUT" : "POST"}`,
      `https://dummyjson.com/products/${isEdit ? props.data.id : "add"}`
    )
      .then((res) => {
        onClose(res);
        handleSucess(
          `El producto se ha ${isEdit ? "actualizado" : "añadido"} con exito`
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
        <Modal.Body></Modal.Body>
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
