import React from 'react';
import { Box, List, Typography } from '@mui/material';
import ItemWithLink from './ItemWithLink';
import DotDivider from './DotDivider';
import { GlobalContext } from '../contexts/globalContext';

const Contacts = ({
  direction = 'row',
  gap = 2,
  listProps = null,
  itemProps = null,
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
              <ItemWithLink
                key={item.id}
                item={item}
                target='_blank'
                {...itemProps}
              />
            );
          }

          return body.length > index + 1 ? (
            <React.Fragment key={item.id}>
              <ItemWithLink
                item={item}
                target='_blank'
                sx={{ width: 'auto' }}
                {...itemProps}
              />
              <DotDivider
                component='li'
                flexItem
                sx={{ bgcolor: 'common.black' }}
              />
            </React.Fragment>
          ) : (
            <ItemWithLink
              key={item.id}
              item={item}
              target='_blank'
              {...itemProps}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Contacts;
