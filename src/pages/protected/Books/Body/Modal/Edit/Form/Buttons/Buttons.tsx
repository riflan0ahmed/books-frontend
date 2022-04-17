import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const Buttons = (props: { close: Dispatch<SetStateAction<boolean>> }) => {
  const handleClose = () => {
    props.close(false);
  };
  return (
    <>
      <div className="w-32 mx-1">
        <Button
          type="button"
          color="primary"
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
          color="primary"
          variant="contained"
          fullWidth={true}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default Buttons;
