import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback } from "react";
import axios from "axios";
// import Jwt from "jsonwebtoken";
// import { useAppDispatch } from "utils/hooks/hook";
// import {
//   updateDecodedToken,
//   updateIsAuthenticated,
//   updateToken,
// } from "utils/userSlice";
// import { InterfaceToken } from "interface/token.interface";
import { useHistory } from "react-router-dom";

interface InterfaceFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Register = () => {
  // const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = useCallback(
    (data: InterfaceFormInputs) => {
      const url = process.env.REACT_APP_BACKEND_URL;

      axios
        .post(`${url}/users`, {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          // const token = response.data;

          // const decoded = Jwt.decode(token as any) as InterfaceToken;
          // dispatch(updateToken(response.data as any));
          // dispatch(
          //   updateDecodedToken({
          //     id: decoded.id,
          //     email: decoded.email,
          //     iat: decoded.iat,
          //   })
          // );
          // dispatch(updateIsAuthenticated(true));
          history.push("/login");
          // window.localStorage.setItem("auth", token as any);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [history]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name")} />
      <p>{errors?.name?.message}</p>

      <input type="text" placeholder="email" {...register("email")} />
      <p>{errors?.email?.message}</p>

      <input type="password" placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Register;
