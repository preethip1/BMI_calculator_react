import React, { Component } from 'react';

class Calculator extends React.Component {
    state = {
        age : '',
        height : '',
        weight : ''
    }
    
    onInputAge = (event) => {
        let newAge = event.target.value;
        this.setState({age : newAge});
        // console.log(newAge);
    }

    onInputHeight = (event) => {
       let newHeight = event.target.value;
       this.setState({height : newHeight});
        // console.log(newHeight);
    } 
    
    onInputWeight = (event) => {
        let newWeight = event.target.value;
        this.setState({weight : newWeight})
        // console.log(newWeight);
    }
    
    onSubmit = () => {
        if(this.state.age.length && this.state.height.length && this.state.weight.length > 0 ) {
            let bmi = this.calculateBMI();
            try {
            let status = this.calculateBMIStatus(bmi);
            console.log(bmi,status);
             }
            catch (error) {
            alert('Invalid Input');
            return;
            }
        }
        else {
            alert('Please check the details entered');
        }
    }

    calculateBMI() {
        let bmi = (10000 * this.state.weight) / (this.state.height * this.state.height);
        return bmi;
    }


    calculateBMIStatus = (bmi) => {
        let status;
        switch(true) {
            case (bmi < 18.5) && (bmi >0):
                status = "You are underweight";
                break;
                case (bmi < 25) && (bmi >= 18.5):
                    status = "You are normal-weight";
                    break;
                case (bmi < 30) && (bmi >= 25):
                    status = "You are over-weight";
                    break;
                case (bmi >= 30):
                    status = "You are obese";
                    break;
                default:
                    throw new Error("Invalid value");   
        }
        return status;
    }

    render() { 
        return <div>
            <div className="outer">
                <div className="h-75 w-50 border d-flex flex-column p-1">
                    <h6 className="m-3 text-center">BMI Calculator</h6>
                    <input type="number" onInput={this.onInputAge} className="m-3" placeholder="Enter your age: "/>
                    <div>
                    <input type="radio" name="gender" value="male" className="m-3"/> Male
                    <input type="radio" name="gender" value="female" className="m-3"/> Female
                    <input type="radio" name="gender" value="other" className="m-3"/> Other
                    </div>
                    <input type="number" onInput = {this.onInputHeight} className="m-3" placeholder="Enter your height in cm : "/>
                    <input type="number" onInput={this.onInputWeight} className="m-3" placeholder="Enter your weight in Kg : "/>
                    <button onClick={this.onSubmit} className="btn-sm btn-primary m-2" placeholder="Submit">Submit </button>
                </div>
            </div>
        </div>;
    }
}
 
export default Calculator;