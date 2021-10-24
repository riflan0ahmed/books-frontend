import { Button } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateModalCreate } from "utils/bookSlice";

const Header = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  const open = useCallback(() => {
    dispatch(updateModalCreate(true));
  }, [dispatch]);

  return (
    <div className="flex flex-row w-full mb-8">
      <div className="flex justify-start my-auto mr-auto">Pagination</div>
      <div className="flex justify-end gap-5 ml-auto">
        <Button color="primary" variant="contained" onClick={open}>
          Create
        </Button>

        <Button color="primary" variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
