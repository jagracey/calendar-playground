import React, { Component, PropTypes } from 'react'
import DayCell from './day-cell'
import calendarService from './../../services/calendar-bounds'

import store from './../../core/store';

class MonthGrid extends Component {
  static propTypes = {
    //state: PropTypes.object.isRequired
  }

  // public changeMonth(months) {
  //   store.dispatch({
  //     type: 'CALENDAR:CHANGE_MONTH',
  //     value: months
  //   });
  // }
  //
  //
  // onNextMonth(){ changeMonth(+1) }
  // onPrevMonth(){ changeMonth(-1) }
  // onNextYear (){ changeMonth(+12) }
  // onPrevYear (){ changeMonth(-12) }

  onNextMonth(){
    store.dispatch({
      type: 'CALENDAR:CHANGE_MONTH',
      value: +1
    });
  }
  onPrevMonth(){
    store.dispatch({
      type: 'CALENDAR:CHANGE_MONTH',
      value: -1
    });
  }
  onNextYear (){
    store.dispatch({
      type: 'CALENDAR:CHANGE_MONTH',
      value: +12
    });
  }
  onPrevYear (){
    store.dispatch({
      type: 'CALENDAR:CHANGE_MONTH',
      value: -12
    });
  }


  render() {
    const { state } = this.props;

    const calendar = calendarService(
      state.calendarReducer.year,
      state.calendarReducer.month,
      state.calendarReducer.options.startOfWeek
    )
    const { month, year, titles, grid } = calendar;

    return (
      <div style={{
          margin: 'auto',
          textAlign: 'center'
        }}>

        <h1>
          <button onClick={this.onPrevMonth}>&#8249;</button>
          <span style={{minWidth: '350px', display: 'inline-block'}}>{month}</span>
          <button onClick={this.onNextMonth}>&#8250;</button>
        </h1>

        <h2>
          <button onClick={this.onPrevYear}>&#8249;</button>
          <span style={{minWidth: '350px', display: 'inline-block'}}>{year}</span>
          <button onClick={this.onNextYear}>&#8250;</button>
        </h2>

        <div className="week" style={{
            marginTop: '100px',
            paddingBottom: '20px',
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
          {titles.map( function(DayOfWeek){
              return <li style={{
                display: 'inline-block',
                listStyle: 'none',
                textAlign: 'center',
                width: '150px'
              }}> { DayOfWeek } </li>;
          })}
        </div>

        {grid.map( week => {

          const days = week.map( dayCell => {
                return <DayCell data={dayCell}/>
          })

          return <div className="week" style={{
              borderTop: '1px solid #cdcdcd',
              display: 'inline-block'
            }} > { days } </div>

        })}
      </div>

    )
  }

}

export default MonthGrid;
