import { Modal } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectModalDelete, updateModalDelete } from "utils/redux/bookSlice";
import { useAppSelector } from "utils/hooks/hook";
import Form from "./Form/Form";

const Delete = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const open = useAppSelector(selectModalDelete);

  const close = () => {
    dispatch(updateModalDelete(false));
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

export default Delete;
