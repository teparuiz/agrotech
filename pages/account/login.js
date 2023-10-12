import React, { useState } from "react";
import style from "../../styles/login.module.css";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { handleError, handleSucess } from "../../config/utils";
import Link from "next/link";
import { HTTP } from "@/config/http";
import { useRouter } from "next/router";

const Login = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const login = () => {
    HTTP("POST", "https://dummyjson.com/auth/login", {
      username: "kminchelle",
      password: "0lelplR",
    })
      .then((response) => {
        setToken(response.token);
        if (token) {
          router.push("/products");
        }
      })
      .catch((error) => {
        handleError("Ha sucedido un error, revisa tu información por favor");
      });
  };

  return (
    <div className={style.login}>
      <div className="flex flex-col w-full max-w-md text-center">
        <div className="self-center mb-6 text-xl font-light text-black sm:text-2xl dark:text-white">
          <h1> Registro </h1>
        </div>

        <div className="mt-2">
          <form autoComplete="off">
            <div className="flex flex-col mb-4">
              <div className="col-6">
                <Input
                  type="email"
                  name="Correo"
                  value={email}
                  onChange={setEmail}
                  placeholder="Escribe tu correo electrónico"
                  pattern=".+@globex\.com"
                  required={true}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="col-6">
                {" "}
                <Input
                  type="password"
                  name="Contraseña"
                  placeholder="Escribe tu contraseña"
                  onChange={setPassword}
                  value={password}
                  required={true}
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
              <div>
                <Link href="/account/register">¿No tienes una cuenta?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
