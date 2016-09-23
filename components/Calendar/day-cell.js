import React, { Component, PropTypes } from 'react'
import store from '../../core/store';
import _ from 'lodash'



class DayCell extends Component {
  static propTypes = {
    data:     PropTypes.object.isRequired
  }


  getEventCount(year, month, day){
    return _.get(store.getState(), ['calendarReducer','schedule', year, month, day], []).length
  }


  loadDayView(e){
    e.preventDefault();
    hist.push(e.currentTarget.pathname);

  }

  datePad(number){
    return ('0'+number).slice(-2);
  }
  render() {
    const { year, month, monthName, day, date } = this.props.data

    let count = this.getEventCount(year, month, day)
    let today = ( new Date().toDateString() === new Date(year, month, day).toDateString() )
    let isActiveMonth  = ( _.get(store.getState(), ['calendarReducer','month'] ) === month)

    return (
      <a className="DayCell"
        href={ `/calendar/${ year }-${ this.datePad(month+1) }-${ this.datePad(day) }/` }
        onClick={ this.loadDayView }
        style={{
          borderRight: '1px solid #cdcdcd',
          display: 'inline-block',
          height: '150px',
          width: '150px',
          textAlign: 'center',
          paddingLeft: '12px',
          paddingTop: '61px',
          background: today ? 'rgba(0, 188, 212, 0.3) ' : 'white'
        }}>
        <b style={{
          border: '2px solid '+'#00BCD4',
          borderRadius: '100%',
          height: '30px',
          width: '30px',
          verticalAlign: 'middle',
          textAlign: 'center',
          paddingTop: '4px',
          display: 'inline-block',
          background: 'white',
          opacity: isActiveMonth ? 1 : 0.4
          }}>{day}</b>

        {

          <span className="badge badge-warning" style={{
              display: count ? 'inline-block' : 'none',
              top: '-13px',
              left: '-7px',
              position: 'relative',
              backgroundColor: '#00BCD4',
              opacity: isActiveMonth ? 1 : 0.4
            }}> { count } </span>
        }
      </a>
    )
  }
}

export default DayCell
