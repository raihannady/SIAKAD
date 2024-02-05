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
// import { CallAPI } from '../../domain/CallAPI';
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

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await callAPI({
        endpoint: '/movie',
        method: 'GET',
      });
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.button}>
          <Link to="/movie-editor">
            <Button variant="contained">Add Movie</Button>
          </Link>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableTitle}>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Title
                </TableCell>
                {/* <TableCell align="center">Description</TableCell> */}
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Duration
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Genre
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Rating
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Release Year
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((data, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" component="th" scope="row">
                      {data.title}
                    </TableCell>
                    {/* <TableCell align="center">{data.desc}</TableCell> */}
                    <TableCell align="center">{data.duration} minutes</TableCell>
                    <TableCell align="center">{data.genre}</TableCell>
                    <TableCell align="center">{data.rating}/10</TableCell>
                    <TableCell align="center">{data.releaseYear}</TableCell>
                    <TableCell align="center" className={classes.action}>
                      <Link to={`/movie-editor/${data.id}`}>
                        <Button variant="contained">Edit</Button>
                      </Link>

                      <div>
                        <Button className={classes.deleteButton} onClick={handleOpen}>
                          Delete
                        </Button>
                        <Modal
                          BackdropProps={{
                            style: {
                              backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            },
                          }}
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="parent-modal-title"
                          aria-describedby="parent-modal-description"
                        >
                          <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">Delete</h2>
                            <p id="parent-modal-description">Are you sure want to delete this movie?</p>
                            <Button onClick={handleClose} sx={{ mr: 1 }}>
                              Cancel
                            </Button>
                            <Button
                              sx={{ m: 1, color: 'error.main' }}
                              onClick={() => {
                                CallAPI({
                                  endpoint: `/movie/${data.id}`,
                                  method: 'DELETE',
                                }),
                                  window.location.reload();
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Modal>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
