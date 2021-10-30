import { useCallback, useEffect, useState } from "react";
import {
  selectLimit,
  selectPage,
  selectTotal,
  // updateLimit,
  updatePage,
} from "utils/bookSlice";
import { useAppSelector, useAppDispatch } from "utils/hooks/hook";
import { TextField } from "@mui/material";

const Pagination = () => {
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);
  const total = useAppSelector(selectTotal);

  const [text, setText] = useState(1);

  const dispatch = useAppDispatch();

  const handleSearch = useCallback(() => {
    dispatch(updatePage(text));
  }, [dispatch, text]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleChange = (value: any) => {
    setText(value);
  };

  return (
    <div className="flex flex-row gap-5">
      <span>Page Number{page}</span>
      <span>Page Limit{limit}</span>
      <span>Total Books{total}</span>
      <br />
      <TextField
        label="search"
        size="small"
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Pagination;
