import React from 'react';
import { Link } from 'react-router-dom';

export const DataPage = ({onInputChange, values}) => (
    <div className='col-sm-12 center'>

        <h3 className=''>Location & Contact</h3>
        <label htmlFor='address'>Address</label>
        
        {/* <h4 className='field-label'>Address</h4> */}
        <input id='address' type="text" name="address" value={values.address} onChange={onInputChange}/>

        {/* <div className='divider'></div> */}

        {/* <h4 className='field-label'>Name</h4> */}
        <label htmlFor='name'>Name</label>        
        <input id='name' type="text" name="name" value={values.name} onChange={onInputChange}/>
        {/* <div className='divider'></div> */}

        {/* <h4 className='field-label'>Phone</h4> */}
        <label htmlFor='phone'>Phone</label>
        <input id='phone' type="number" name="phone" value={values.phone} onChange={onInputChange}/>
        {/* <div className='divider'></div> */}

        {/* <h4 className='field-label'>Email</h4> */}
        <label htmlFor='email'>Email</label>
        <input id='email' type="email" name="email" value={values.email} onChange={onInputChange}/>
        {/* <div className='divider'></div> */}
        <div className='steps_container'>
            <Link to='/appointment'>
                <button className='btn-default nav-steps'>BACK</button>
            </Link>
            <Link to='/summary'>
                <button className='btn-default nav-steps'>NEXT</button>
            </Link>
        </div>


    </div>
)