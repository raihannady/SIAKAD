// import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getStudent } from './actions';
import { selectStudent } from './selectors';
import { setToken } from '@containers/Client/actions';
import { selectToken } from '@containers/Client/selectors';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
// import { callAPI } from '../../domain/CallAPI';
import classes from './style.module.scss';
import Card from './components/Card';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

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

const Home = ({ student, token }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // if (token === null) {
  //   return navigate('/login');
  // }

  const decoded = jwtDecode(token);
  console.log(decoded, 'tes');

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getStudent());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data', error);

        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <p></p>;
  }
  const sortedStudent = [...student].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h5">Selamat Datang {decoded.fullname}</Typography>{' '}
      </div>
      <div className={classes.card}>
        <Card title="Students" total="10"></Card>
        <Card title="Lecturers" total="7"></Card>
        <Card title="Courses" total="8"></Card>
      </div>

      <div className={classes.graph}>
        <div className={classes.card}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Student' },
                  { id: 1, value: 15, label: 'Lecturer' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
        <div className={classes.card}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A'] }]}
            series={[{ data: [4] }, { data: [1] }, { data: [2] }]}
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* <div className={classes.container}> */}
      {/* <div className={classes.button}>
          <Link to="/movie-editor">
            <Button variant="contained">Add Movie</Button>
          </Link>
        </div> */}
      {/* <TableContainer component={Paper}>
          <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableTitle}>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  No
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Fullname
                </TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Nickname
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Email
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  Action
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
              {sortedStudent?.map((data, index) => (
                <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {data.fullname}
                  </TableCell>
                  <TableCell align="center">{data.desc}</TableCell>
                  <TableCell align="center">{data.nickname}</TableCell>
                  <TableCell align="center">{data.email}</TableCell>

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
        </TableContainer> */}
      {/* </div> */}
    </>
  );
};

const formatDate = (timestamp) => {
  const dateObject = new Date(timestamp);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return dateObject.toLocaleDateString('en-US', options);
};

Home.propTypes = {
  student: PropTypes.arrayOf(
    PropTypes.shape({
      fullname: PropTypes.string,
      nickname: PropTypes.string,
      email: PropTypes.string,
      updatedAt: PropTypes.string,
      lecturer: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ),
  token: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  student: selectStudent,
  token: selectToken,
  // login: selectLogin,
});

export default connect(mapStateToProps)(Home);
