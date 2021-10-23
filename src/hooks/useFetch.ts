import axios, { AxiosError } from "axios";
import { InterfaceBook } from "interface/book.interface";
import { useCallback, useEffect, useState } from "react";
import { updateBooks } from "utils/bookSlice";
import { useAppDispatch } from "utils/hooks/hook";

const useFetch = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<InterfaceBook[]>();

  const fetchBooks = useCallback(async () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      const response = await axios.get(`${url}/books`, {
        params: {
          page: 1,
          limit: 10,
          term: "",
        },
      });
      const data = response.data["results"];
      dispatch(updateBooks(data));
      setData(data);
    } catch (error) {
      console.log(error as AxiosError);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return data;
};

export default useFetch;
