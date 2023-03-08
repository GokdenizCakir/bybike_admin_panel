import * as yup from 'yup';

export const loginValSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^[0-9]+$/)
    .min(10)
    .max(10)
    .required('Please enter a phone number'),
});

export const passwordValSchema = yup.object().shape({
  password: yup.string().min(6).required('Please enter your password'),
});

export const codeValSchema = yup.object().shape({
  code: yup.string().matches(/^[0-9]+$/).min(6).max(6).required('Please enter your code'),
});

export const newPasswordValSchema = yup.object().shape({
  password: yup.string().min(6).required('Please enter your password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
