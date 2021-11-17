import React from 'react';
import { Box, ListItem, Stack } from '@mui/material';
import Link from '../Link';
import DotDivider from '../DotDivider/DotDivider';
import { GlobalContext } from '../../contexts/globalContext';
import styles from './Nav.module.css';

const Item = ({ item, linkProps = null, ...props }) => (
  <ListItem disablePadding key={item.id} {...props}>
    <Link activeClassName={styles.link_active} href={item.link} {...linkProps}>
      {item.name}
    </Link>
  </ListItem>
);

const Nav = ({
  direction = 'row',
  spacing = 2,
  containerProps = null,
  listProps = null,
  itemProps = null,
  linkProps = null,
}) => {
  const { navigation } = React.useContext(GlobalContext);

  return (
    <Box component='nav' {...containerProps}>
      <Stack
        className={styles.list}
        component='ul'
        direction={direction}
        spacing={spacing}
        {...listProps}
      >
        {navigation.links.map((item, index) => {
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

          return navigation.links.length > index + 1 ? (
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
      </Stack>
    </Box>
  );
};

export default Nav;
