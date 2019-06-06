import React from 'react'

import Display from './Display'
import Keyboard from './Keyboard'

export default class App extends React.Component {

    state = {
        num1: "0",
        num2: 0,
        operation: '',
        dotUsed: false,
        editing: false
    }

    addDigit(d) {
        const {num1, editing} = this.state;
        if (editing === false) {
            this.setState({editing: true, num1: `${d}`})
        } else {
            this.setState({num1: `${num1}${d}`, editing: true})
        }
    }

    clear() {
        this.setState({num1: '0', editing: false})
    }

    operation(op) {
        const {num1, num2, operation} = this.state
        this.setState({operation: op, num2: parseFloat(num1), editing: false})
    }

    dot() {
        const {num1, editing, dotUsed} = this.state;
        if (editing === true && dotUsed === false) {
            this.setState({num1: `${num1}${'.'}`, dotUsed: true})
        } else if (editing === false) {
            this.setState({dotUsed: true, num1: `0.`, editing: true})
        }

    }

    count() {
        const {num1, num2, operation} = this.state
        let result = 0;

        switch(operation){
            case '+': result = parseFloat(num1) + num2; break
            case '-': result = num2 - parseFloat(num1); break
            case '*': result = parseFloat(num1) * num2; break
            case '/': result = parseFloat(num1) === 0 ? "Error" : num2 / parseFloat(num1); break
            default : break
        }

        this.setState({num1: result, editing: false})

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
                    <button onClick={() => this.dot()}>.</button>
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
