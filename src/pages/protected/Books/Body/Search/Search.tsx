import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { updateQuery } from "utils/redux/bookSlice";
import { useAppDispatch } from "utils/hooks/hook";

const Search = () => {
  const [term, setTerm] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = useCallback(() => {
    dispatch(updateQuery(term));
  }, [dispatch, term]);

  const handleClear = useCallback(() => {
    dispatch(updateQuery(""));
  }, [dispatch]);

  return (
    <div className="flex flex-row gap-4 my-4">
      <TextField
        label="search"
        size="small"
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={handleSearch}
      >
        Search
      </Button>
      <Button color="primary" variant="text" size="small" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
};

export default Search;
