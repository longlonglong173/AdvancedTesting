import { FormTextField } from '@e2e-testing/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import { LoginForm } from '../types/type.types';
import { DEFAULT_LOGIN_FORM } from '../constants/conttants.constants';
import { delay, loginSchema } from '../helper/helpers';

const Login = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLogin');
    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, [navigate]);

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
        await delay(1000);

        console.log(values);
        localStorage.setItem('isLogin', '1');
        navigate('/');
    };

    useEffect(() => {
        document.title = 'Login Screen';
    }, []);

    if (isLogin) {
        return null;
    }

    return (
        <AuthLayout>
            <Typography
                variant='h4'
                color='primary'
                textAlign='center'
                sx={{ mb: 4 }}
            >
                Login Page
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormTextField
                    control={control}
                    name='email'
                    label='Email'
                    textFieldProps={{ sx: { mb: 2 } }}
                    dataTestId='login-input-email'
                />
                <FormTextField
                    control={control}
                    name='password'
                    label='Password'
                    textFieldProps={{ sx: { mb: 4 }, type: 'password' }}
                    dataTestId='login-input-password'
                />
                <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    disabled={isSubmitting || !isValid}
                    size='large'
                    data-testid='login-button'
                >
                    Login
                </Button>
            </form>
        </AuthLayout>
    );
};

export default Login;
