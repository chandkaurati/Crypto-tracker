import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
function BackToTop() {

    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  return (
    <div  className='text-[var(--blue)]
     fixed  w-[3rem] h-[3rem]
     border flex  border-white justify-center items-center
     right-10 bottom-20 rounded-full  
     '
     id="myBtn"
     onClick={topFunction}
     >
    <ArrowUpwardRoundedIcon/> 
    </div>
  )
}

export default BackToTop
