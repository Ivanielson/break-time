import React from 'react';
import './App.css';
import InputTime from './components/InputTime';
import InputTimeText from './components/InputTimeText';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
      time: false,
      inputTime: true,
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: parseFloat(Math.round(value).toFixed(2)) });
  }

  showTime = () => {
    const { minutes, seconds } = this.state;
    if (minutes > 0 || seconds > 0) {
      this.setState((prevState) => ({
        time: !prevState.time,
        inputTime: !prevState.inputTime,
      }));
    }
  }

  startTime = () => {
    const ONE_SECOND = 1000;
    this.setIntervalID = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, ONE_SECOND);
  }

  stopTime = () => {
    clearInterval(this.setIntervalID);
    this.setState({
      minutes: 0,
      seconds: 0,
      time: false,
      inputTime: true,
    });
    return alert("Time Encerrado!!");
  }

  componentDidUpdate() {
    const { minutes, seconds } = this.state;
    if (minutes > 0 && seconds === 0) {
      this.setState((prevState) => ({
        minutes: prevState.minutes - 1,
        seconds: 59,
      }));
    }
  }

  render() {
    const { minutes, seconds, time, inputTime } = this.state;
    return (
      <main className="container">
        <div className="break-time">
          <p className="title-break text-success">Break</p>
          <p className="title-time text-success">Tme</p>
        </div>
          <section className="input-time">
            { time && (minutes > 0 || seconds > 0) ? <InputTimeText stop={ this.stopTime } start={ this.startTime } minutes={ minutes } seconds={ seconds } /> : "" }
            {inputTime ? <InputTime minutes={ minutes } seconds={ seconds } handleChage={ this.handleInputChange } /> : ""}
          <button className="btn btn-success" onClick={ this.showTime }>
            {time ? <i class="bi bi-stop-circle"> Stop</i> : <i class="bi bi-watch"> Start</i>}
          </button>
          </section>
      </main>
    );
  }
}

export default App;
