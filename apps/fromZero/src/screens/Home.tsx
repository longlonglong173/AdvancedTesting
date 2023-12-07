import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NxWelcome from '../app/nx-welcome';

const Home = () => {
    const isLogin = localStorage.getItem('isLogin');

    useEffect(() => {
        document.title = `From Zero${
            Boolean(isLogin) ? ' - Welcome Back' : ''
        }`;
    }, []);

    return (
        <div>
            <h1 id='title'>Home Page</h1>

            {isLogin ? (
                <Button
                    data-testid='btn-logout'
                    variant='outlined'
                    onClick={() => {
                        localStorage.removeItem('isLogin');
                        window.location.reload();
                    }}
                >
                    Logout
                </Button>
            ) : (
                <Link to='/login'>
                    <Button data-testid='btn-login' variant='contained'>
                        To Login Screen
                    </Button>
                </Link>
            )}
            <NxWelcome title='Home' />
        </div>
    );
};

export default Home;
