import React from 'react';
import './Options.css'


export const Options = ({name, handleClick, num}) => (
    <div>
        <label htmlFor={name.toLowerCase()}>{name}</label>
        {/* <h4 className='field-label'>{name}</h4> */}
        <div id={name.toLowerCase()} className="btn-group btn-group-lg" role="group" aria-label= 'choices'>
            {Array(5).fill(null).map((el, i) => 
                <button key={i} type="button" className={"btn btn-default" + (i  === num - 1 ? ' active ' : ' ') + 'btn_choices'} name={name.toLowerCase()} value={ i + 1 } onClick={handleClick}>{ i + 1 === 5 ? i + 1 + '+' : i + 1}</button>   
            )}
        </div>
    </div>
)