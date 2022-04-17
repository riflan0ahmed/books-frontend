import { BrowserRouter, Switch, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import AuthGuard from "./AuthGuard/AuthGuard";
import Register from "./unprotected/Register/Register";
import Login from "./unprotected/Login/Login";
import Users from "./protected/Users/Users";
import Dashboard from "./protected/Dashboard/Dashboard";
import Books from "./protected/Books/Books";
import NotFound from "./unprotected/NotFound/NotFound";

const Page = () => {
  const [local, setLocal] = useLocalStorage("auth", "");

  return (
    <BrowserRouter>
      <Switch>
        {/* Public routes */}

        <Route path="/login">
          <Login local={local} setLocal={setLocal} />
        </Route>
        <Route path="/register" component={Register} />

        {/* Protected Routes */}
        <Route path="/books">
          <AuthGuard auth={local}>
            <Books />
          </AuthGuard>
        </Route>
        <Route path="/users">
          <AuthGuard auth={local}>
            <Users />
          </AuthGuard>
        </Route>
        <Route exact path="/">
          <AuthGuard auth={local}>
            <Dashboard />
          </AuthGuard>
        </Route>

        {/* Not Found route */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Page;
