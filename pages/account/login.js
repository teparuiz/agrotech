import React, { useEffect, useState } from "react";
import style from "../../styles/login.module.css";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { handleError, handleSucess } from "../../config/utils";
import Link from "next/link";
import { HTTP } from "@/config/http";
import { useRouter } from "next/router";

const Login = (props) => {
  const router = useRouter();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [token, setToken] = useState("");

  const login = () => {
    HTTP("POST", "https://dummyjson.com/auth/login", {
      username,
      password,
    })
      .then((response) => {
        setToken(response.token);
        handleSucess("Sesión iniciada con éxito");
        router.push("/products");
      })
      .catch((error) => {
        handleError("Ha sucedido un error, revisa tu información por favor");
      });
  };

  return (
    <div className={style.login}>
      <div className="flex flex-col w-full max-w-md text-center">
        <div className="self-center mb-6 text-xl font-light text-black sm:text-2xl dark:text-white">
          <h1> Iniciar sesión </h1>
        </div>

        <div className="mt-2">
          <div className="flex flex-col mb-4">
            <div className="col-6">
              <Input
                type="text"
                name="Usuario"
                value={username}
                onChange={setUsername}
                placeholder="Escribe tu nombre de usuario"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="col-6">
              <Input
                type="password"
                name="Contraseña"
                placeholder="Escribe tu contraseña"
                onChange={setPassword}
                value={password}
              />
            </div>
          </div>
          <div
            className="flex mt-
            4"
          >
            <Button
              onClick={login}
              name="Iniciar sesión"
              icon="login"
              className="btn btn-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
