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
import Navbar from "stories/Surface/Navbar/Navbar";

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
        <div className="grid grid-cols-10 gap-5">
          <div className="col-span-1"></div>
          <div className="flex flex-col h-screen col-span-9 bg-gray-50">
            <Navbar label="Books" />

            <Switch>
              <Route path="/books" component={Books} />
              <Route path="/users" component={Users} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
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
