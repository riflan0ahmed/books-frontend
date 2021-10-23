import { Modal } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectModalEdit, updateModalEdit } from "utils/bookSlice";
import { useAppSelector } from "utils/hooks/hook";
import Form from "./Form/Form";

const Edit = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const open = useAppSelector(selectModalEdit);

  const close = () => {
    dispatch(updateModalEdit(false));
  };

  return (
    <Modal
      ref={modalRef}
      className="flex items-center justify-center"
      open={open}
      onClose={close}
    >
      <Form close={close} />
    </Modal>
  );
};

export default Edit;
