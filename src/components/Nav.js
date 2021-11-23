import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Stack } from '@mui/material';
import DotDivider from './DotDivider';
import ItemWithLink from './ItemWithLink';
import { GlobalContext } from '../contexts/globalContext';

const Nav = ({
  direction = 'row',
  spacing = 2,
  addLinkToHome = false,
  containerProps = null,
  listProps = null,
  itemProps = null,
}) => {
  const { navigation } = React.useContext(GlobalContext);

  let links = navigation.links;

  if (addLinkToHome) {
    links = [{ id: uuidv4(), name: 'Главная', link: '/' }, ...navigation.links];
  }

  return (
    <Box component='nav' {...containerProps}>
      <Stack
        component='ul'
        direction={direction}
        spacing={spacing}
        sx={{ listStyle: 'none', m: 0, p: 0 }}
        {...listProps}
      >
        {links.map((item, index) => {
          if (direction.startsWith('column')) {
            return (
              <ItemWithLink
                key={item.id}
                item={item}
                {...itemProps}
              />
            );
          }

          return links.length > index + 1 ? (
            <React.Fragment key={item.id}>
              <ItemWithLink
                item={item}
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
              {...itemProps}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Nav;
