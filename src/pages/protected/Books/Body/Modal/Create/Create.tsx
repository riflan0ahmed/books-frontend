import { Modal } from "@mui/material";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { selectModalCreate, updateModalCreate } from "utils/redux/bookSlice";
import { useAppSelector } from "utils/hooks/hook";
import Form from "./Form/Form";

const Create = () => {
  const modalRef = useRef(null);

  const dispatch = useDispatch();
  const open = useAppSelector(selectModalCreate);

  const close = useCallback(() => {
    dispatch(updateModalCreate(false));
  }, [dispatch]);

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

export default Create;
