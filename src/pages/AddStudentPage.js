import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React from 'react';

function AddStudentPage() {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="name">Name please</InputLabel>
        <Input id="name" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name">Name please</InputLabel>
        <Input id="name" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name">Name please</InputLabel>
        <Input id="name" aria-describedby="my-helper-text" />
      </FormControl>
    </>
  );
}

export default AddStudentPage;
