import { useState, React } from "react";
import InputField from "../../input-field/inputField";
import { LoginWrapper } from "./loginStyle";
export const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log(login);

  return (
    <LoginWrapper>
      <InputField
        
        placeholder="Enter name"
        type='text'
        label="Name"
        name="username"
        value={login.username}
        onChange={(e) =>
          setLogin({ ...login, [e.target.name]: e.target.value })
        }
      />

      <InputField
        type="password"
        placeholder="Enter password"
        label="Password"
        name="password"
        value={login.password}
        onChange={(e) =>
          setLogin({ ...login, [e.target.name]: e.target.value })
        }
      />
    </LoginWrapper>
  );
};
