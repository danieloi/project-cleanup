import React from 'react';
import { Link } from 'react-router-dom';


export const Appointment = ({onInputChange, values}) => (
    <div className='col-sm-12 center'>

        <h3>Appointment</h3>
        <label htmlFor='date'>Enter Date</label>
        {/* <h4 className='field-label'>Enter Date</h4> */}
        <input id='date' type="date" name="date" value={values.date} onChange={onInputChange} />

        <div className='divider'></div>

        <label htmlFor='time'>Enter Time</label>
        {/* <h4 className='field-label'>Enter Time</h4> */}
        <input id='time' type="time" name="time" value={values.time}  onChange={onInputChange} />
        <div className='divider'></div>
        <div className='steps_container'> 
            <Link to='/'>
                <button className='btn-default nav-steps'>BACK</button>
            </Link>
            {/* <div className='divider'></div> */}
            <Link to='/address'>
                <button className='btn-default nav-steps'>NEXT</button>
            </Link>
        </div>
        
    </div>
)