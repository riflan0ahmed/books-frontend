import { Modal } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectModalPreview, updateModalPreview } from "utils/redux/bookSlice";
import { useAppSelector } from "utils/hooks/hook";
import Form from "./Form/Form";

const Preview = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const open = useAppSelector(selectModalPreview);

  const close = () => {
    dispatch(updateModalPreview(false));
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

export default Preview;
