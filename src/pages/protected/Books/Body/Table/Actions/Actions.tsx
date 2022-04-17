import { Button } from "@mui/material";
import { InterfaceBook } from "utils/interface/book.interface";
import { useAppDispatch } from "utils/hooks/hook";
import {
  updateBook,
  updateModalArchive,
  updateModalEdit,
  updateModalPreview,
  updateModalDelete,
} from "utils/redux/bookSlice";

const Actions = (props: { book: InterfaceBook }) => {
  const dispatch = useAppDispatch();

  const toggleModal = (type: "edit" | "preview" | "archive" | "delete") => {
    dispatch(updateBook(props.book));
    switch (type) {
      case "edit":
        return dispatch(updateModalEdit(true));
      case "preview":
        return dispatch(updateModalPreview(true));
      case "archive":
        return dispatch(updateModalArchive(true));
      case "delete":
        return dispatch(updateModalDelete(true));
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
      {/* <Button
        color="error"
        variant="text"
        onClick={() => toggleModal("delete")}
      >
        Delete
      </Button> */}
    </div>
  );
};

export default Actions;
