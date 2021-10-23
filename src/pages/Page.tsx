import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Users from "./Users";
import Home from "./Home";
import Books from "./Books/Books";
import { useEffect } from "react";
import { useAppSelector } from "utils/hooks/hook";
import { selectIsAuthenticated } from "utils/userSlice";
import { useHistory } from "react-router-dom";
import Register from "./Auth/Register/Register";
import useLocalStorage from "hooks/useLocalStorage";

const Page = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const router = useHistory();

  useLocalStorage();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Page", isAuthenticated);
      return router?.replace("/login");
    }
  }, [router, isAuthenticated]);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/users" component={Users} />
          <Route exact path="/" component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Page;
