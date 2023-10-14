import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export interface iLoginFormProps {
  formAction?: string;
  formMethod?: "get" | "post";
  logIn?: () => void;
}
const LoginForm = (props : iLoginFormProps) => {

  return (
    <form action={props.formAction} method={props.formMethod} className="login-form">
        <Input
          label={"User Name"}
          inputName="user-name"
          type="text"
        />
      <Input
        label={"password"}
        inputName="user-name"
        type="password"
      />
      <Button
        active={true}
        label={"Login"}
        type={"submit"}
      />
    </form>
  );
};

export default LoginForm;
