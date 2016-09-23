

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import moment from 'moment'

import store from '../../core/store';
import Weather from '../../components/Weather/Weather'
import Event from '../../components/Calendar/event'
import MonthGrid from '../../components/Calendar/month-grid'



/*
  TODO TODO TODO TODO
  This component does not communicate it's date very well as it transmits it though the location url.
  This should probably be cleaned up. Doing so would prevent all the date parsing below.

  This imposes some soft limitations, like not properly architecting for Previous & Next day on single day view.

*/


class DayViewPage extends React.Component {

  static propTypes = {

  };

  componentDidMount() {
    document.title = title;
  }

  render() {

    let location = hist.getCurrentLocation();
    let m = moment(location.pathname.split('/')[2]);
    var title = m.format('dddd, MMMM Do YYYY');
    var date = m.toDate();

    let events = _.get(store.getState(),['calendarReducer','schedule', date.getFullYear(), date.getMonth(), date.getDate() ],[]);

    let weatherOutlook =  _.get(this.props.weather, ['query','results','channel','item','forecast'],[]);
    let forecast = weatherOutlook[ _.findIndex(weatherOutlook, function(w) { return w.date == m.format('D MMM YYYY'); }) ]
    let weatherComponent = forecast ? <Weather forecast={forecast}></Weather> : '';

    return (
      <Layout className={s.content}>
        <h2> { title } </h2>
        { weatherComponent }

        { events.map( (event,i) => {
            return <Event date={date} id={i} key={i} data={event}></Event>
        }) }

        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default DayViewPage;
