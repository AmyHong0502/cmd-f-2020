import React from 'react';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import CardHeader from '@material-ui/core/CardHeader';

const ContainedCardHeader = (props) => {
  const styles = useContainedCardHeaderStyles();
  const {mission} = props;
  return (
    <CardHeader
      classes={styles}
      title={mission}
      subheader="$300"
    />
  );
};


export default ContainedCardHeader;