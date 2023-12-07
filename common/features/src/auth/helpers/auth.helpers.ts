import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const delay = (time = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
