import { RouteComponentProps, withRouter } from "react-router";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

type SomeComponentProps = RouteComponentProps;

const Breadcrumb: React.FC<SomeComponentProps> = ({ history, location }) => {
  const pathname = location.pathname;
  const pathNames = pathname.split("/").filter((x: any) => x);

  return (
    <div role="presentation">
      <Breadcrumbs separator="›">
        <Link onClick={() => history.push("/")}>Home</Link>
        {pathNames.map((name: string, index: number) => {
          let routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
          let isLast = index !== pathNames.length - 1;

          return isLast ? (
            <Link
              onClick={() => history.push(routeTo)}
              style={{ textTransform: "capitalize" }}
            >
              {name}
            </Link>
          ) : (
            <Typography style={{ textTransform: "capitalize" }}>
              {name}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default withRouter(Breadcrumb);
