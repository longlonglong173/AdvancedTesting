import React, { FC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { FormInputProps } from '../form.types';

type FormTextFieldProps = FormInputProps & {
  textFieldProps?: TextFieldProps;
  dataTestId?: string;
};

const FormTextField: FC<FormTextFieldProps> = ({
  name,
  control,
  label,
  textFieldProps,
  dataTestId,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box mb={2}>
          <TextField
            helperText={null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            {...textFieldProps}
            inputProps={{ 'data-testid': dataTestId }}
            sx={{ mb: 0 }}
          />
          {error && (
            <Typography
              variant="caption"
              color="error"
              data-testid={`${dataTestId}-error`}
            >
              {error.message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};

export default memo(FormTextField);
