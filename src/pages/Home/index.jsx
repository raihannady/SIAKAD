import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import BasicTable from './Table';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <FormattedMessage id="app_greeting" />
      {/* <BasicTable></BasicTable> */}
    </div>
  );
};

export default Home;
