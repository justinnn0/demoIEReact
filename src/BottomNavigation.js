import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Apple" src= {require('./apple.jpg')} sx={{ width: 56, height: 56 }}/>
      <Avatar alt="Pear" src=  {require('./pear.jpg')} sx={{ width: 56, height: 56 }}/>
      <Avatar alt="Orange" src= {require('./orange.jpg')} sx={{ width: 56, height: 56 }} />
    </Stack>
  );
}