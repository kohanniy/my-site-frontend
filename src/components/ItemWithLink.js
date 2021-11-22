import { ListItem } from '@mui/material';
import Link from './Link'

const ItemWithLink = ({ item, target = '_self', activeClassName = null, ...props }) => (
  <ListItem disablePadding {...props}>
    <Link activeClassName={activeClassName} href={item.link} target={target}>
      {item.name}
    </Link>
  </ListItem>
);

export default ItemWithLink;
