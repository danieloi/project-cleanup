import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Workload } from './Workload/Workload';
import { Appointment } from './Appointment/Appointment';
import './Order.css';

export class Order extends Component {
    constructor(props) {
        super(props);

    }

    
    render() { 
        console.log(this.optionChange + 'From within Order' + '\n');
        
        return (
            <div>
                
            </div>
            
        );
        
    }  
}