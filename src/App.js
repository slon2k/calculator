import React from 'react'

import Display from './Display'
import Keyboard from './Keyboard'

export default class App extends React.Component {

    state = {
        num1: "0",
        num2: "0",
        operation: ''
    }

    addDigit(d) {
        const {num1} = this.state;
        const newValue = `${num1}${d}`
        this.setState({num1: newValue})
    }

    clear() {
        this.setState({num1: "0"})
    }

    operation(op) {
        const {num1, num2, operation} = this.state
        this.setState({operation: op})
        this.setState({num2: num1})
        this.setState({num1: "0"})

    }

    count() {
        const {num1, num2, operation} = this.state
        let result = 0;

        switch(operation){
            case '+': result = parseFloat(num1) + parseFloat(num2); break
            case '-': result = parseFloat(num1) - parseFloat(num2); break
            case '*': result = parseFloat(num1) * parseFloat(num2); break
            case '/': result = parseFloat(num2) === 0 ? "Error" : parseFloat(num1) / parseFloat(num2); break
            default : break
        }

        this.setState({num1: result})

    }



    render() {
        const {num1, operation, num2} = this.state

        return (
            <div>
                <h2>Calculator</h2>
                <Display num={num2}/>
                {operation}
                <Display num={num1}/>

                <Keyboard/>
                <div>
                    <button onClick={() => this.addDigit(0)}>0</button>
                    <button onClick={() => this.addDigit(1)}>1</button>
                    <button onClick={() => this.addDigit(2)}>2</button>
                    <button onClick={() => this.addDigit(3)}>3</button>
                    <button onClick={() => this.addDigit(4)}>4</button>
                    <button onClick={() => this.addDigit(5)}>5</button>
                    <button onClick={() => this.addDigit(6)}>6</button>
                    <button onClick={() => this.addDigit(7)}>7</button>
                    <button onClick={() => this.addDigit(8)}>8</button>
                    <button onClick={() => this.addDigit(9)}>9</button>
                    <button onClick={() => this.addDigit(".")}>.</button>
                </div>
                <div>
                    <button onClick={() => this.clear()}>C</button>
                    <button onClick={() => this.operation('+')}>+</button>
                    <button onClick={() => this.operation('-')}>-</button>
                    <button onClick={() => this.operation('*')}>*</button>
                    <button onClick={() => this.operation('/')}>/</button>
                </div>
                <button onClick={() => this.count()}>=</button>


            </div>
        )
    }
}
