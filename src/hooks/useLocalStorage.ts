import { useCallback, useEffect } from "react";
import { useAppDispatch } from "utils/hooks/hook";
import { updateIsAuthenticated, updateToken } from "utils/userSlice";

const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  const checkLocalStorage = useCallback(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      dispatch(updateToken(auth));
      dispatch(updateIsAuthenticated(true));
    }
  }, [dispatch]);

  useEffect(() => {
    checkLocalStorage();
  }, [checkLocalStorage]);
};

export default useLocalStorage;
