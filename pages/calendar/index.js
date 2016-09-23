/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

import MonthGrid from '../../components/Calendar/month-grid'
import store from '../../core/store';

class CalendarPage extends React.Component {

  static propTypes = {

  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <MonthGrid
          state={store.getState()}
        />
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}


export default CalendarPage;
