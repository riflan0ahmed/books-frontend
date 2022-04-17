import { Modal } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectModalArchive, updateModalArchive } from "utils/redux/bookSlice";
import { useAppSelector } from "utils/hooks/hook";
import Form from "./Form/Form";

const Archive = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const open = useAppSelector(selectModalArchive);

  const close = () => {
    dispatch(updateModalArchive(false));
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

export default Archive;
