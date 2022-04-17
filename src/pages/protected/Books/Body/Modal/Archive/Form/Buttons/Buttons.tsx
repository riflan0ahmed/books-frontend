import { Button } from "@mui/material";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction, useCallback } from "react";
import { archiveBook, selectBook } from "utils/redux/bookSlice";
import { useAppDispatch, useAppSelector } from "utils/hooks/hook";

const Buttons = (props: { close: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useAppDispatch();

  const book = useAppSelector(selectBook);
  const bookId = useAppSelector(selectBook)._id;

  const handleClose = useCallback(() => {
    props.close(false);
  }, [props]);

  const handleArchive = useCallback(async () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      await axios.patch(`${url}/books/${bookId}`, {
        isArchived: true,
      });

      dispatch(
        archiveBook({
          ...book,
          isArchived: true,
        })
      );

      handleClose();
    } catch (error) {
      console.log(error as AxiosError);
    }
  }, [bookId, handleClose, dispatch, book]);

  return (
    <>
      <div className="w-32 mx-1">
        <Button
          type="button"
          color="inherit"
          variant="text"
          fullWidth={true}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
      <div className="w-32 mx-1">
        <Button
          type="submit"
          color="error"
          variant="contained"
          fullWidth={true}
          onClick={handleArchive}
        >
          Archive
        </Button>
      </div>
    </>
  );
};

export default Buttons;
