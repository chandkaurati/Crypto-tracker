import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({days, setDays}) {
  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width : 200,}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color: 'white', ":focus" : "white"}}>days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handleChange}
          sx={{color:'white', border: '0.3px solid white', margin: '1em'}}
        >
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={365}>one year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
