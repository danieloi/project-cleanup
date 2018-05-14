import React from 'react';
import { Link } from 'react-router-dom';
import { Options } from '../Options/Options';


export const Workload = (props) => {
    // console.log( props.optionChange + 'From within Workload \n');
    // console.log(Object.getOwnPropertyNames(props) + '\n');
    const {rooms, bath, onInputChange} = props;
    
    return (
        <section className=''>
            <div className='col-sm-12 center main-content'>
                <h3>Workload</h3>
                <Options name='Rooms' handleClick={onInputChange} num={rooms}/>
                <div className='divider'></div>
                <Options name='Bathrooms' handleClick={onInputChange} num={bath}/>
                <div className='divider'></div>
                <p>Room size is based on Estimated Occupant per room of 4</p>
                <Link to='/appointment'>
                    <button className='btn-default'>NEXT</button>
                </Link>

            </div>
        </section> 
    );
}