import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#'+Math.floor(Math.random()*16777215).toString(16),
    interval:null
  }

  // add your code here
  componentDidMount() {
    let interval=setInterval( () => { 
             let newtime = this.state.time + 1;
             this.setState({time:newtime})
    }, 1000)

    this.setState({interval:interval});

  }

  componentWillUnmount() {
    !!this.state.interval ? () => clearInterval(this.state.interval) : null;
  }

  render() {

    const { time, color, className } = this.state
    return (
      <section className="Timer" style={{background: color}}>

        <h1>{ time }</h1>
        <button onClick={ this.stopClock }>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={ this.handleClose }>X</small>

      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time+1
    }))
  }

  stopClock = () => {
    //clearInterval(this.interval)
    clearInterval(this.state.interval)
    this.setState({interval:null});
  }

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }


}

export default Timer;
