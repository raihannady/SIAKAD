import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getLecturer } from './actions';
import { selectLecturer } from './selectors';

import { ping } from '@containers/App/actions';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
// import { callAPI } from '../../domain/CallAPI';
import classes from './style.module.scss';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 3,
  pt: 2,
  px: 4,
  pb: 3,
};

const Lecturer = ({ lecturer }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getLecturer());
    // setLoading(false);
  }, [dispatch]);

  // if (loading) {
  //   return <p></p>;
  // }

  return (
    <>
      {/* <div className={classes.buttonwrapper}>
        <Link to="/course/add-course" className={classes.button}>
          <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>
            Tambah Course
          </Button>
        </Link>
      </div> */}
      <div className={classes.container}>
        {/* <div className={classes.button}>
          <Link to="/movie-editor">
            <Button variant="contained">Add Movie</Button>
          </Link>
        </div> */}
        <TableContainer component={Paper}>
          <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableTitle}>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  No
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Lecturer Name
                </TableCell>
                {/* <TableCell align="center">Description</TableCell> */}
                {/* <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Credits
                </TableCell> */}
                {/* <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Release Year
                </TableCell> */}
                {/* <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Action
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {lecturer?.map((data, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {data.name}
                  </TableCell>
                  {/* <TableCell align="center">{data.desc}</TableCell> */}
                  {/* <TableCell align="center">{data.credits}</TableCell> */}
                  {/* <TableCell align="center">{data.email}</TableCell>
                  <TableCell align="center">{data.lecturer_id}</TableCell> */}
                  {/* <TableCell align="center">{data.rating}/10</TableCell>
                  <TableCell align="center">{data.releaseYear}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

Lecturer.propTypes = {
  lecturer: PropTypes.any,
  // login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  lecturer: selectLecturer,
  // login: selectLogin,
});

export default connect(mapStateToProps)(Lecturer);
