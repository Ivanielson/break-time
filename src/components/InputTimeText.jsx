import React from 'react';

class InputTimeText extends React.Component {

  componentDidMount() {
    const { minutes, seconds, start, stop } = this.props;
    if (minutes > 0 || seconds > 0) {
      start();
    } else if(minutes === 0 && seconds === 0) {
      stop();
    }
  }

  componentWillUnmount() {
    const { stop } = this.props;
    stop();
  }

  addZero = (value) => {
    let newValue = '';
    if (value < 10) {
      newValue = `0${value}`;
    }
    return newValue;
  }

  render() {
    const { minutes, seconds } = this.props;
    return (
      <p className="digital-time text-success mb-4">Time
        <span className="time">{ minutes < 10 ? `0${minutes}` : minutes }:{ seconds < 10 ? `0${seconds}` : seconds }</span>
      </p>
    );
  }
}

export default InputTimeText;
