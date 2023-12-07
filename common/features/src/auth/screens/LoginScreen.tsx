import React, { FC, useEffect } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Button, Typography } from '@mui/material';
import { FormTextField } from '@e2e-testing/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginForm } from '../types/auth.types';
import { DEFAULT_LOGIN_FORM } from '../constants/auth.constants';
import { delay, loginSchema } from '../helpers/auth.helpers';

const LoginScreen: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<LoginForm>({
    defaultValues: DEFAULT_LOGIN_FORM,
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values: LoginForm) => {
    await delay();

    console.log(values);
  };

  useEffect(() => {
    document.title = 'Login Screen';
  }, []);

  return (
    <AuthLayout>
      <Typography
        variant="h4"
        color="primary"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Login Page
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          control={control}
          name="email"
          label="Email"
          textFieldProps={{ sx: { mb: 2 } }}
          dataTestId="login-input-email"
        />
        <FormTextField
          control={control}
          name="password"
          label="Password"
          textFieldProps={{ sx: { mb: 4 }, type: 'password' }}
          dataTestId="login-input-password"
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={isSubmitting || !isValid}
          size="large"
          data-testid="login-button"
        >
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginScreen;
