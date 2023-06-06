import React from "react";

import { AuthenticateTemplate, InputText } from "../../Components";

import * as S from "./styles";

const Register = () => {
  return (
    <AuthenticateTemplate>
      <InputText
        type="text"
        label={"Tessasate"}
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </AuthenticateTemplate>
  );
};

export default Register;
