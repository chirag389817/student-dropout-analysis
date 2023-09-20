import { Container, Stack, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Iconify from '../components/iconify';

function StudentsPage() {
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
          <Link to="/dashboard/student/add">
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Student
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}

export default StudentsPage;
