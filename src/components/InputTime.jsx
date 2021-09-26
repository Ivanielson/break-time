import React from 'react';
import PropTypes from 'prop-types';

class InputTime extends React.Component {
  render() {
    const { minutes, seconds, handleChage } = this.props;
    return (
    <div className="input-group mb-2">
        <input
          className="form-control"
          name="minutes"
          value={ minutes }
          onChange={ handleChage }
          type="number"
          id="input-min"
          max="59"
          min="0"
          placeholder="min"
        />
        <span className="input-group-text bg-success text-white">M</span>
        <input
          className="form-control"
          name="seconds"
          value={ seconds }
          onChange={ handleChage }
          type="number"
          id="input-sec"
          max="59"
          min="0"
          placeholder="sec"
        />
        <span className="input-group-text bg-success text-white">s</span>
    </div>
    );
  }
}

export default InputTime;

InputTime.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  handleChage: PropTypes.func.isRequired,
};
