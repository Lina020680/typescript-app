import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormComponent, LoginFormName, InputsContainer } from "./styles";
import { useFormik } from "formik";
import { LoginFormValues, LOGIN_FIELD_NAMES} from "./types";
import * as Yup from 'yup';

function LoginForm() {

  // создаем валидационную схему yup
  const shema = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]:Yup.string().required('Field email required').email('Field type email'),
    [LOGIN_FIELD_NAMES.PASSWORD]:Yup.string().required('Field password required')
  })
  // сохранение возвращаемого useFormik значения в переменную formik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FIELD_NAMES.EMAIL]: "",
      [LOGIN_FIELD_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema:shema,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    //привязываем к элементу формы действие submit
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          name={LOGIN_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
          error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
          onBlur={formik.handleBlur}
        />
        <Input
          name={LOGIN_FIELD_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
          error={formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}
          onBlur={formik.handleBlur}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
