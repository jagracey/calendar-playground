

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import moment from 'moment'

import store from '../../core/store';


class OptionsPage extends React.Component {

  static propTypes = {

  };

  componentDidMount() {
    document.title = title;
  }

  onSelectStartOfWeek(x){
    // store.dispatch({
    //   type: "OPTION:START_OF_WEEK",
    //   value: 0
    // })
  }

  render() {

    return (
      <Layout className={s.content}>
          <h2> { title } </h2>

          <label className="checkbox-inline">
            Display Event Count?
            <input type="checkbox" value="1"/>
          </label>

          <br/>

          <label className="checkbox-inline"> Starting Day of Week:
            <select onChange={ this.onSelectStartOfWeek() } className="form-control">
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
          </label>

      </Layout>
    );
  }

}

export default OptionsPage;
