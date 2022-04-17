import { Dispatch, SetStateAction, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Jwt from "jsonwebtoken";
import { useAppDispatch } from "utils/hooks/hook";
import {
  updateDecodedToken,
  updateIsAuthenticated,
  updateToken,
} from "utils/redux/userSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InterfaceToken } from "utils/interface/token.interface";
import { Button, TextField } from "@mui/material";

interface InterfaceFormInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Email must be valid email")
    .required("Email must be required"),
  password: yup
    .string()
    .required("Password must be required")
    .min(8, "Password must be required"),
});

const Login = (props: {
  local: string;
  setLocal: Dispatch<SetStateAction<any>>;
}) => {
  const { local, setLocal } = props;

  const dispatch = useAppDispatch();
  const navigate = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = useCallback(
    (formData: InterfaceFormInputs) => {
      axios
        .post("http://localhost:5000/api/login", {
          ...formData,
        })
        .then((res: any) => {
          setLocal(JSON.stringify(res.data.token));
          dispatch(updateToken(local as any));
          const decoded = Jwt.decode(
            JSON.parse(local) as any
          ) as InterfaceToken;
          dispatch(
            updateDecodedToken({
              id: decoded.id,
              email: decoded.email,
              iat: decoded.iat,
            })
          );
          dispatch(updateIsAuthenticated(true));
          navigate.push("/books");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [dispatch, navigate, local, setLocal]
  );

  return (
    <div className="grid w-full h-screen max-w-screen-xl grid-cols-2 gap-5 mx-auto ">
      <div className="flex items-center justify-center col-span-1 "></div>
      <div className="flex items-center justify-center w-full col-span-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center my-5 text-xl font-semibold">
            Sign In
          </div>

          <div className="py-2">
            <TextField
              color="primary"
              variant="filled"
              label="email"
              defaultValue="riflan@gmail.com"
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          </div>

          <div className="py-2">
            <TextField
              type="password"
              color="primary"
              variant="filled"
              label="password"
              defaultValue="12345678"
              {...register("password")}
              error={!!errors.password}
              helperText={errors?.password?.message}
            />
          </div>

          <div className="py-4 ">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth={true}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
