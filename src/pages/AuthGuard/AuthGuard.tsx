import { Redirect, Route } from "react-router-dom";

const AuthGuard = (props: { children: any; auth: string }) => {
  const { auth, children } = props;

  return (
    <Route
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthGuard;
