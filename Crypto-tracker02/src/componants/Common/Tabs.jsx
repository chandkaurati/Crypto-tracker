import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import CoinGridbox from './CoinGridbox';
import CoinList from './CoinList';

export default function LabTabs({coins}) {
  const [value, setValue] = useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
     color: "white",
     width:"50vw",
     fontSize:"1rem"
  }
 
  const theme = createTheme({
     palette:{
        primary:{
            main:"#3a80e9"
        }
     }
  })
  console.log(coins)
  return (
    <div theme={theme}>
     <TabContext value={value}>
        {/* <div sx={{ borderBottom: 1, borderColor: 'divider' }}> */} 
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="Grid"sx={style} />
            <Tab label="List" value="List"sx={style} />
          </TabList>
        {/* </div> */}
        <TabPanel value="Grid">
          <div className='g-f flex 
          justify-items-center 
          justify-center
          items-center flex-wrap
          gap-3 '
          >
          {coins.map((coin)=>{
               return  <CoinGridbox  key={coin.id} coin={coin}/>
            })}
           
          </div>
        </TabPanel>
        <TabPanel value="List">
        <table className='w-full'>
        {coins.map((coin,i)=>{
          return <CoinList key={coin.id} coin={coin}/>
        })}
        </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
