import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import classes from './style.module.scss';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { inputCourse } from './actions';

export default function AddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const dataCourse = {
        // email: encryptPayload(user.email),
        // password: encryptPayload(user.password),
        course_name: user.course_name,
        credits: user.credits,
      };
      console.log(dataCourse);
      dispatch(inputCourse(dataCourse));
      navigate('/course');

      //   navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Typography component="h1" variant="h5" className={classes.title}>
          Input Course
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            size="small"
            fullWidth
            id="course_name"
            label="Course Name"
            name="course_name"
            type="text"
            autoFocus
            onChange={(e) => handleChange(e.target.value, 'course_name')}
            variant="filled"
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            name="credits"
            label="Credits"
            type="number"
            id="credits"
            autoFocus
            onChange={(e) => handleChange(e.target.value, 'credits')}
            variant="filled"
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ mt: 3, mb: 2, textTransform: 'none' }}
            className={classes.button}
          >
            Input Course
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
