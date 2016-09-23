import React, { Component, PropTypes } from 'react'
import store from '../../core/store';

class Event extends Component {
  static propTypes = {
  }


  /*
    TODO: Colors should be a hash based on event name, so that the colors are somewhat persistent.
  */
  randomColor(){
    let rand = Math.random;
    let floor = Math.floor;
    let range = 75;
    return 'rgb('+ (floor((255-range)*rand()) +range) +','+
                   (floor((255-range)*rand()) +range) +','+
                   (floor((255-range)*rand()) +range) +')';
  }

  onDeleteEvent(data){
    store.dispatch({
      type: 'CALENDAR:DELETE_EVENT',
      value: {
        year: data.date.getFullYear(),
        month: data.date.getMonth(),
        day: data.date.getDate(),
        index: data.id
      }
    });
  }

  render() {
    const { id, date } = this.props
    const { name, type } = this.props.data

    return (
      <div className={Event} style={{ background: this.randomColor() }} >
        <h3 style={{
          textTransform: 'capitalize',
          display: 'block',
          margin: '20px',
          padding: '10px',
          fontSize: '28px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}> { name } </h3>
      <h4 style={{
          display: 'block',
          padding: '10px',
          fontSize: '26px',
          textAlign: 'center',
        }}> { type } </h4>
      <button onClick={ this.onDeleteEvent.bind(this,{id,date}) } style={{
        fontSize: '50px',
        float: 'right',
        height: '50px',
        width: '50px',
        right: '20px',
        position: 'relative',
          top: '-110px'
        }}>✕</button>
      </div>
    )
  }
}

export default Event
