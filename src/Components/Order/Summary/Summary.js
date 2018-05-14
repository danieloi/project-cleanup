import React from 'react';
import './Summary.css';
import { Link } from 'react-router-dom';

export const Summary = ({values}) => (
    <div className='col-sm-12 '>
        <h3 className='center'>Summary</h3>
        <table className='table'>
        <tbody>
            <tr>
                <td className='data-field'>Location</td>
                <td>{values.address}</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>{values.name}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{values.phone}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{values.email}</td>
            </tr>
            <tr>
                <td>Date</td>
                <td>{values.date}</td>
            </tr>
            <tr>
                <td>Time</td>
                <td>{values.time}</td>
            </tr>
            <tr>
                <td>Rooms</td>
                <td>{values.rooms}</td>
            </tr>
            <tr>
                <td>Bathrooms</td>
                <td>{values.bathrooms}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{values.price}</td>
            </tr>
        </tbody>
        </table>
        <div className='divider'></div>
        <div className='steps_container'>         
            <Link to='/address'><button className='btn-default nav-steps'>BACK</button></Link>
            <Link to='/summary'><button className='btn-default nav-steps'>PAY</button></Link>
        </div>
    </div>    
)