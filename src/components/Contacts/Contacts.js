import React from 'react';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import Link from '../Link';
import DotDivider from '../DotDivider/DotDivider';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './Contacts.module.css';

const Item = ({ item, linkProps = null, ...props }) => (
  <ListItem disablePadding key={item.id} {...props}>
    <Link href={item.link} target='_blanc' {...linkProps}>
      {item.name}
    </Link>
  </ListItem>
);

const Contacts = ({
  direction = 'row',
  gap = 2,
  listProps = null,
  itemProps = null,
  linkProps = null,
}) => {
  const {
    contacts: {
      content: { title, body },
    },
  } = React.useContext(GlobalContext);

  return (
    <Box>
      <Typography gutterBottom sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: direction,
          gap,
        }}
        disablePadding
        {...listProps}
      >
        {body.map((item, index) => {
          if (direction.startsWith('column')) {
            return (
              <Item
                key={item.id}
                item={item}
                className={styles.item_fullFilled}
                linkProps={linkProps}
                {...itemProps}
              />
            );
          }

          return body.length > index + 1 ? (
            <React.Fragment key={item.id}>
              <Item
                key={item.id}
                item={item}
                className={styles.item}
                linkProps={linkProps}
                {...itemProps}
              />
              <DotDivider
                component='li'
                flexItem
                sx={{ bgcolor: 'common.black' }}
              />
            </React.Fragment>
          ) : (
            <Item
              key={item.id}
              item={item}
              linkProps={linkProps}
              {...itemProps}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Contacts;
