import React, { Component } from 'react'
import { Confirm } from '../../confirm/confirm';
import { Firstdata } from '../../firststep/firstdata';
import { Seconddata } from '../../seconddata/seconddata';
import {Success} from '../../success/success';

export class Userform extends Component {
    state={
        step:1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
    }

    nextstep=()=>{
        const step = this.state.step;
        this.setState({
            step:step+1,
        })
    }

    prevstep=()=>{
        const step = this.state.step;
        this.setState({
            step:step-1,
        })
    }

    handlechange=input=>e=>{
        this.setState({[input]:e.target.value})
    }




    render() {
        const {step} = this.state;
        const {firstname,lastname,occupation,email,city,bio} = this.state;
        const value = {firstname,lastname,occupation,email,city,bio};

        switch (step) {
            case 1:
                return(<Firstdata
                nextstep={this.nextstep}
                handlechange={this.handlechange}
                value={value}
                />)

            case 2:
                return(<Seconddata
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handlechange={this.handlechange}
                    value={value}
                    />)
                    
            
            case 3:
                return(<Confirm
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    value={value}
                />)

            case 4:
                return(<Success/>) 

                
            default:
                return(<div>error happened</div>);
        }
    }
}

export default Userform
