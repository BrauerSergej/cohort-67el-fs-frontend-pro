import "./styles.css";
import Button from "../Button/Button";
import Input from "../input/input";

function LoginForm() {
  return (
    <form className="login_form">
      <h2 className="form_title">Login form</h2>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
