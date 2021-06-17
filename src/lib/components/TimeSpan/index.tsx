import React from 'react'
import './styles.scss'

export default function TimeSpan() {
   return (
      <fieldset id="time-span">
         <legend>Time span selection</legend>
         <label>
         Start date
         <input type="date" name="start-date" required />
         </label>

         <label>
         End date
         <input type="date" name="end-date" required />
         </label>
      </fieldset>
   )
}
