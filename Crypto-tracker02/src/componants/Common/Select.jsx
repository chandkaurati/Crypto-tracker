import React, { useState } from 'react'

function Select() {
    const [days,setDays] = useState()

    const handleChange = (e)=>{
        e.preventDefault()
        setDays(e.target.value)
        console.log(days)
    }
  return (
    <div>
      <select name="days" id="days" value={days} onRateChange={handleChange}>
        <option value="7">seven</option>
        <option value="30">one month</option>
        <option value="365">one Year</option>
        <option value="1700">max</option>
      </select>
    </div>
  )
}

export default Select
