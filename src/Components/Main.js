import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { About } from './About/About';
import { Faqs } from './FAQs/Faqs';
import { Workload } from './Order/Workload/Workload';
import { Appointment } from './Order/Appointment/Appointment';
import { DataPage } from './Order/DataPage/DataPage';
import { Summary } from './Order/Summary/Summary';
import PaystackButton from 'react-paystack';
import { NavLink } from 'react-router-dom';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fields: {
                rooms: 2,
                bathrooms: 1,
                date: '2018-05-13',
                time: '00:00',
                name: 'Mayowa Daniel',
                phone: '08084354792',
                email: 'mayowadan17@gmail.com',
                address: 'Plot 1094 Cadastral Zone B 03 Off Ngozi Okonjo Iweala Rd.',
                price: 2500,
                hours: 2.5
            },
            key: 'pk_test_f68915f70c7a77b65f416080230a9a3822035979'

        };

    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    callback = () => {
        
    }

    close = () => {

    }


    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        const rooms = fields.rooms;
        const bath = fields.bathrooms;
        const hours = rooms * 1 + bath * 0.5;
        const price = hours * 1000;
        fields['price'] = price;
        fields['hours'] = hours;
        this.setState({fields});
    }

    render() {
        return (
            <main role='main' className='container'>
                <div className=' '>
                    <div className='nav_steps_container'>
                        <NavLink exact to='/'>
                            <i className="material-icons md-48">assignment</i>
                        </NavLink>
                        <NavLink to='/appointment'>
                            <i className="material-icons md-48">date_range</i>
                        </NavLink>
                        <NavLink to='/address'>
                            <i className="material-icons md-48">place</i>
                        </NavLink>
                        <NavLink to='/summary'>
                            <i className="material-icons md-48">list_alt</i>
                        </NavLink>
                    </div>
                </div>
                {/* <div className='row'>      
                    <p>
                    <PaystackButton
                        text="Make Payment"
                        class="payButton"
                        callback={this.callback}
                        close={this.close}
                        disabled={false} 
                        embed={false} 
                        reference={this.getReference()}
                        email={'mayowadan17gmail.com'}
                        amount={10000}
                        paystackkey={this.state.key}
                    />
                    </p>
                </div> */}
                <div className='row'>

                    <Switch>
                        <Route exact path='/' render={() => <Workload onInputChange={ this.onInputChange } rooms={this.state.fields.rooms} bath={this.state.fields.bathrooms}/>}/>
                        <Route path='/appointment' render={() => <Appointment onInputChange={ this.onInputChange } values={this.state.fields}/>} />
                        <Route path='/address' render={() => <DataPage onInputChange={ this.onInputChange } values={this.state.fields}/>} />
                        <Route path='/summary' render={() => <Summary values={this.state.fields}/>} />
                        
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/faqs' component={Faqs}/>
                        {/* <Route path='/order/workload' component={Workload}/> */}
                        {/* <Route path='/order/appointment' component={Appointment}/> */}
                    </Switch>
                </div>

                <div>
                    <p>Hours: {this.state.fields.hours} hours</p>
                    <p>Total: {this.state.fields.price}</p>
                </div>
            </main>
        );
    }
}