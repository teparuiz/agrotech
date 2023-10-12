import { HTTP } from "@/config/http";
import { handleError, handleSucess } from "@/config/utils";
import React from "react";
import { Modal, Button } from "react-bootstrap";
const ModalDelete = (props) => {
  const { title = "", visible, onClose, data } = props;

  const _remove = () => {
    HTTP("DELETE", `https://dummyjson.com/products/${data.id}`)
      .then((res) => {
        handleSucess(
          `El producto se ha eliminado con exito la fecha del ${res.deletedOn}`
        );
        onClose(res);
      })
      .catch((err) => handleError("Hubo un error al eliminar el producto"));
  };

  return (
    <div>
      <Modal className="modal-container" show={visible} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-ceter">{title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="btn btn-danger" onClick={_remove}>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDelete;
