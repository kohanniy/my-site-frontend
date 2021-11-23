import { useRouter } from 'next/router';
import { ListItem } from '@mui/material';
import Link from './Link';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...(active && {
    color: theme.palette.secondary.light,
    textDecorationColor: theme.palette.secondary.light,
  }),
}));

const ItemWithLink = ({ item, target = '_self', ...props }) => {
  const { pathname } = useRouter();

  const active = pathname === item.link;

  return (
    <ListItem disablePadding {...props}>
      <StyledLink active={active} href={item.link} target={target}>
        {item.name}
      </StyledLink>
    </ListItem>
  );
};

export default ItemWithLink;
