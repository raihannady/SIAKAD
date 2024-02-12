import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, total }) {
  // const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Total {title}
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="50px"
            width="50px"
            version="1.1"
            id="_x32_"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                className="st0"
                d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093   L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101   c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618   l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148   l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
              />
              <path
                className="st0"
                d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638   c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017   C278.145,344.44,267.25,346.831,256,346.831z"
              />
            </g>
          </svg>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <Typography variant="h3">{total}</Typography>
      </Box>
    </Card>
  );
}
