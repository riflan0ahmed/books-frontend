import axios, { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import {
  selectLimit,
  selectPage,
  selectQuery,
  updateBooks,
} from "utils/bookSlice";
import { useAppDispatch, useAppSelector } from "utils/hooks/hook";
import Body from "./Body/Body";
import Header from "./Header/Header";

const Books = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectQuery);
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);

  const fetchBooks = useCallback(async () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      const response = await axios.get(`${url}/books`, {
        params: {
          page: page,
          limit: limit,
          term: query,
        },
      });
      const data = response.data["results"];
      dispatch(updateBooks(data));
      console.log(response.data);
    } catch (error) {
      console.log(error as AxiosError);
    }
  }, [dispatch, query, limit, page]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="w-full h-screen p-10 bg-gray-100">
      <Header />
      <Body />
    </div>
  );
};

export default Books;
