import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserDetail } from './actions';
import { selectUserDetail } from './selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Avatar } from '@mui/material/';
import classes from './style.module.scss';

const Profile = ({ userDetail }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

  console.log(userDetail, 'tes');

  return (
    <>
      <div className={classes.container}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <div>{userDetail.fullname}</div>
        <div>{userDetail.nickname}</div>
        <div>{userDetail.email}</div>
        <div>{userDetail.role}</div>
      </div>
    </>
  );
};

Profile.propTypes = {
  userDetail: PropTypes.any,
  // login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userDetail: selectUserDetail,
  // login: selectLogin,
});

export default connect(mapStateToProps)(Profile);
