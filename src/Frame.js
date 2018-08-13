import React from 'react';
import Screen from './Screen';
import Button from './Button';

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const value = e.target.value;
    switch (value) {
      case '=':
        const answer = eval(this.state.question).toString();
        this.setState({ answer });
        break;
      case 'Cls':
        this.setState({ question: '', answer: '' });
        break;
      default:
        this.setState({ question: this.state.question += value });
        break;
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="calculetor-title">
          R_N Calculator
        </div>
        <Screen question={this.state.question} answer={this.state.answer} />
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type="input" />
          <Button label={'2'} handleClick={this.handleClick} type="input" />
          <Button label={'3'} handleClick={this.handleClick} type="input" />
          <Button label={'4'} handleClick={this.handleClick} type="input" />
          <Button label={'-'} handleClick={this.handleClick} type="action" />
          <Button label={'+'} handleClick={this.handleClick} type="action" />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type="input" />
          <Button label={'6'} handleClick={this.handleClick} type="input" />
          <Button label={'7'} handleClick={this.handleClick} type="input" />
          <Button label={'8'} handleClick={this.handleClick} type="input" />
          <Button label={'*'} handleClick={this.handleClick} type="action" />
          <Button label={'/'} handleClick={this.handleClick} type="action" />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type="input" />
          <Button label={'.'} handleClick={this.handleClick} type="input" />
          <Button label={'0'} handleClick={this.handleClick} type="input" />
          <Button label={'Cls'} handleClick={this.handleClick} type="action" />
          <Button label={'='} handleClick={this.handleClick} type="action" />
        </div>
      </div>
    );
  }
}

export default Frame;