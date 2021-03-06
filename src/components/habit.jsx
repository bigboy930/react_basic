import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };
    
    handleIncrement = () => {
        // console.log(event);
        // state 오브젝트 안에 있는 count 를 증가 한뒤 state 를 업데이트 해야 함.
        // this.state.count += 1;
        this.setState({count: this.state.count + 1});
    };

    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count });
        //this.setState({count: this.state.count - 1});
    }; 

    render() {
        //const.log(this.props.habit);
        const { name, count } = this.props.habit;
        return(
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;