import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () =>{
    const [searchTerm,setSearchTerm]=useState("");
    const navigate=useNavigate();

    const onHandleChange=(e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };

    return (
        <Paper 
            component="form"
            onSubmit={onHandleChange}
            sx={{
                //width: '400px',
                borderRadius:'100px',
                border:'1px solid #e3e3e3',
                pl:2,
                boxShadow: 'none',
                mr: {sm:5}
            }}
            >
            <input 
                font-weight="1000"
                className='search-bar'
                placeholder='Search'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)} 
                style={{paddingLeft:'12px'}}
            />

            <IconButton 
            type='submit'
            sx={{p:'10px',color:'red'}}
            aria-label='search'>
                <Search/>
            </IconButton>
        </Paper>
    )
}
export default SearchBar