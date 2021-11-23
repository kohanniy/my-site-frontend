import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const URL = 'https://kohanniy.vercel.app';

const StyledShareButton = styled(Button)(({ theme }) => ({
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(0.5),
    marginLeft: 0,
  },
}));

const ShareButton = ({ text, Button, Icon, iconProps, ...props }) => {
  const { pathname } = useRouter();

  return (
    <StyledShareButton
      component={Button}
      url={`${URL}${pathname}`}
      startIcon={<Icon {...iconProps} />}
      {...props}
    >
      {text}
    </StyledShareButton>
  );
};

export default ShareButton;
