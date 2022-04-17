import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useCallback } from "react";

const Buttons = (props: { close: Dispatch<SetStateAction<boolean>> }) => {
  const handleClose = useCallback(() => {
    props.close(false);
  }, [props]);

  return (
    <>
      <div className="mx-1 w-28">
        <Button
          color="primary"
          variant="contained"
          fullWidth={true}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Buttons;
