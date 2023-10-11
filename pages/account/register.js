// export default Register;
import React, { useState } from "react";
import Link from "next/link";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import { handleError, handleSucess, ValidEmail } from "../../config/utils";

const Register = (props) => {
  const { setIsLogged } = props;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const register = () => {
    if (ValidEmail(email)) {
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("nickName", nickName);
      setIsLogged(false);
      handleSucess("Cuenta creada con exito");
    } else {
      handleError("Revisa tus datos");
    }
  };

  const _disabled = () => {
    let disabled = false;
    if (!password) return (disabled = true);
    if (!email) return (disabled = true);

    return disabled;
  };
  return (
    <div>
      <form autoComplete="off">
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
            <Input
              name="Nombre"
              value={name}
              onChange={setName}
              placeholder="Escribe tu nombre"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
            <Input
              name="Usuario"
              value={nickName}
              onChange={setNickName}
              placeholder="Escribe tu usuario"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
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
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
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
        <div className="flex w-full mt-2">
          <Button
            onClick={register}
            name="Crear cuenta"
            icon="person_add_alt"
            disabled={_disabled()}
          />
        </div>
        <div>
          <Link href="/account/login">¿Ya tienes cuenta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
