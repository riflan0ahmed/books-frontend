import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceBook } from "../interface/book.interface";
import type { RootState } from "../store";

// Define a type for the slice state
interface BookState {
  book: InterfaceBook | null;
  books: InterfaceBook[];
  total: number;
  query: string;
  page: number;
  limit: number;
  modal: {
    preview: boolean;
    edit: boolean;
    archive: boolean;
    create: boolean;
  };
}

// Define the initial state using that type
const initialState: BookState = {
  book: null,
  books: [],
  total: 0,
  query: "",
  page: 1,
  limit: 10,
  modal: {
    preview: false,
    edit: false,
    archive: false,
    create: false,
  },
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateBook: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      state.book = action.payload;
    },
    updateBooks: (state: BookState, action: PayloadAction<InterfaceBook[]>) => {
      state.books = action.payload;
    },
    editBooks: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      const index = state.books.findIndex(
        (book) => book._id === action.payload._id
      ) as number;
      const arr = state.books;
      arr[index] = action.payload;
    },
    createBook: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      const newBook = state.book as InterfaceBook;
      state.books.push(newBook);
    },
    updateTotal: (state: BookState, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    updateQuery: (state: BookState, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updatePage: (state: BookState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    updateLimit: (state: BookState, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    updateModalPreview: (state: BookState, action: PayloadAction<boolean>) => {
      state.modal.preview = action.payload;
    },
    updateModalEdit: (state: BookState, action: PayloadAction<boolean>) => {
      state.modal.edit = action.payload;
    },
    updateModalArchive: (state: BookState, action: PayloadAction<boolean>) => {
      state.modal.archive = action.payload;
    },
    updateModalCreate: (state: BookState, action: PayloadAction<boolean>) => {
      state.modal.create = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateBook,
  updateBooks,
  editBooks,
  createBook,
  updateTotal,
  updateQuery,
  updateLimit,
  updatePage,
  updateModalPreview,
  updateModalEdit,
  updateModalArchive,
  updateModalCreate,
} = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBook = (state: RootState) =>
  state.book.book as InterfaceBook;
export const selectBooks = (state: RootState) =>
  state.book.books as InterfaceBook[];
export const selectTotal = (state: RootState) => state.book.total as number;
export const selectQuery = (state: RootState) => state.book.query as string;
export const selectPage = (state: RootState) => state.book.page as number;
export const selectLimit = (state: RootState) => state.book.limit as number;

// Modal
export const selectModalPreview = (state: RootState) =>
  state.book.modal.preview as boolean;
export const selectModalEdit = (state: RootState) =>
  state.book.modal.edit as boolean;
export const selectModalArchive = (state: RootState) =>
  state.book.modal.archive as boolean;
export const selectModalCreate = (state: RootState) =>
  state.book.modal.create as boolean;

export default bookSlice.reducer;
