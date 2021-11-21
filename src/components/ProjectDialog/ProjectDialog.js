import React from 'react';
import {
  Dialog,
  DialogContent,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const responsivePaddingStyles = { xs: '8px 12px', sm: '16px 24px' };

const ProjectDialog = ({ open, onClose, title, children, ...props }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      aria-labelledby='title'
      aria-describedby='description'
    >
      <Stack
        direction='row'
        sx={responsivePaddingStyles}
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography id='title' variant='h2' component='h2'>
          {title}
        </Typography>
        <IconButton aria-label='close' onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent sx={responsivePaddingStyles} id='description'>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
