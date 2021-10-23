import { Button } from "@mui/material";
import { InterfaceBook } from "interface/book.interface";
import { useAppDispatch } from "utils/hooks/hook";
import {
  updateBook,
  updateModalArchive,
  updateModalEdit,
  updateModalPreview,
} from "utils/bookSlice";

const Actions = (props: { book: InterfaceBook }) => {
  const dispatch = useAppDispatch();

  const toggleModal = (type: "edit" | "preview" | "archive") => {
    dispatch(updateBook(props.book));
    switch (type) {
      case "edit":
        return dispatch(updateModalEdit(true));
      case "preview":
        return dispatch(updateModalPreview(true));
      case "archive":
        return dispatch(updateModalArchive(true));
    }
  };

  return (
    <div className="flex flex-row gap-3">
      <Button
        color="success"
        variant="text"
        onClick={() => toggleModal("preview")}
      >
        Preview
      </Button>
      <Button
        color="primary"
        variant="text"
        onClick={() => toggleModal("edit")}
      >
        Edit
      </Button>
      <Button
        color="error"
        variant="text"
        onClick={() => toggleModal("archive")}
      >
        Archive
      </Button>
    </div>
  );
};

export default Actions;
