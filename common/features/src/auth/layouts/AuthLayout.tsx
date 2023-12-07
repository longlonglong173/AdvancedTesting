import { Grid, Paper } from '@mui/material';
import React, { FC } from 'react';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', bgcolor: 'grey.100', px: 2 }}
    >
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
