import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
      direction='row'
      alignItems='center'
      p={2}
      spacing={2}
      sx={{position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'center'
    }}
    >

      <Link 
      to="/" 
      style={{display: 'flex',alignItems: 'center'
      }}>
        <img src={logo} 
          alt='logo'
          height={45} />
      </Link>

      <Stack
      sx={{
        //display:"flex",
        //flex:"1 1 auto",
        justifyContent:"center"
      }}>
        <SearchBar/>
      </Stack>
    </Stack>
)

export default Navbar