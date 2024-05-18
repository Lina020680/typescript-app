import "./styles.ts";
import Input from "components/Input/Input";
import Button from "components/Button/Button"

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginForm>Login form</LoginForm>
      <InputsContainer>
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
