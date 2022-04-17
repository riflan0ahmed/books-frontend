import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceBook } from "utils/interface/book.interface";
import type { RootState } from "store";

// Define a type for the slice state
interface BookState {
  listItem: InterfaceBook | null;
  list: InterfaceBook[];
  total: number;
  query: string;
  page: number;
  limit: number;
  modal: {
    preview: boolean;
    edit: boolean;
    archive: boolean;
    create: boolean;
    delete: boolean;
  };
}

// Define the initial state using that type
const initialState: BookState = {
  listItem: null,
  list: [],
  total: 0,
  query: "",
  page: 1,
  limit: 10,
  modal: {
    preview: false,
    edit: false,
    archive: false,
    create: false,
    delete: false,
  },
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateBook: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      state.listItem = action.payload;
    },
    updateBooks: (state: BookState, action: PayloadAction<InterfaceBook[]>) => {
      state.list = action.payload;
    },
    editBooks: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      const index = state.list.findIndex(
        (book) => book._id === action.payload._id
      ) as number;
      const arr = state.list;
      arr[index] = action.payload;
    },
    createBook: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      const newBook = state.listItem as InterfaceBook;
      state.list.push(newBook);
    },
    deleteBook: (state: BookState, action: PayloadAction<string>) => {
      const filterBooks = state.list?.filter(
        (book) => book._id !== action.payload
      );
      state.list = filterBooks as InterfaceBook[];
    },
    archiveBook: (state: BookState, action: PayloadAction<InterfaceBook>) => {
      const filterBooks = state.list?.filter(
        (book) => book._id !== action.payload._id
      );
      state.list = filterBooks as InterfaceBook[];
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
    updateModalDelete: (state: BookState, action: PayloadAction<boolean>) => {
      state.modal.delete = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateBook,
  updateBooks,
  editBooks,
  createBook,
  deleteBook,
  archiveBook,
  updateTotal,
  updateQuery,
  updateLimit,
  updatePage,
  updateModalPreview,
  updateModalEdit,
  updateModalArchive,
  updateModalCreate,
  updateModalDelete,
} = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBook = (state: RootState) =>
  state.books.listItem as InterfaceBook;
export const selectBooks = (state: RootState) =>
  state.books.list as InterfaceBook[];
export const selectTotal = (state: RootState) => state.books.total as number;
export const selectQuery = (state: RootState) => state.books.query as string;
export const selectPage = (state: RootState) => state.books.page as number;
export const selectLimit = (state: RootState) => state.books.limit as number;

// Modal
export const selectModalPreview = (state: RootState) =>
  state.books.modal.preview as boolean;
export const selectModalEdit = (state: RootState) =>
  state.books.modal.edit as boolean;
export const selectModalArchive = (state: RootState) =>
  state.books.modal.archive as boolean;
export const selectModalCreate = (state: RootState) =>
  state.books.modal.create as boolean;
export const selectModalDelete = (state: RootState) =>
  state.books.modal.delete as boolean;

export default bookSlice.reducer;
