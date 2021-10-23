import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceToken } from "../interface/token.interface";
import type { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  token: string;
  decodedToken: InterfaceToken | null;
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  token: "",
  decodedToken: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    updateDecodedToken: (
      state: UserState,
      action: PayloadAction<InterfaceToken>
    ) => {
      state.decodedToken = action.payload;
    },
    updateIsAuthenticated: (
      state: UserState,
      action: PayloadAction<boolean>
    ) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateToken, updateDecodedToken, updateIsAuthenticated } =
  userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.user.token as string;
export const selectValid = (state: RootState) =>
  state.user.decodedToken as InterfaceToken;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated as boolean;

export default userSlice.reducer;
