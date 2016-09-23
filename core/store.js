/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, combineReducers } from 'redux';
//import { counter, simpleCounter } from './../reducers/'

import { generateYear } from '../services/secretary.js';

import calendarReducer from '../reducers/calendar.js'


const reducers = combineReducers({
  calendarReducer
});


var currentDate = new Date();

const initialState = {
  calendarReducer: {
    cookieStorage: true,
    options: {
      northernHemisphere: true,   // Changes Winter vs Summer Theme, WIP
      daysEventCount: true,       // Style option
      startOfWeek: 0,             // 0-6, Starting with Sunday
      location: 'Vancouver, BC'   // For Weather Forcast Lookup
    },
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    schedule: {
      2016: generateYear(2016),
      2017: generateYear(2017),
      2018: generateYear(2018)
    }
  }
}

export default createStore(reducers, initialState)
