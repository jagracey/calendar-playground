import _ from 'lodash'


export default (state = {}, action) => {

  // REMINDER: Reducers are only see their piece of the state pie! (state.calendarReducer.months ==> state.months)
  switch (action.type) {

    case 'CALENDAR:CHANGE_MONTH' :
      let month = (((state.month + action.value ) % 12) + 12) % 12;
      let year  = Math.floor( (state.month + action.value ) / 12);
      state.month = month;
      state.year += year;

      // TODO: THIS IS MUTATING THE STATE, THEN COPYING THE STATE...
      return Object.assign({}, state, {});


    case 'CALENDAR:DELETE_EVENT':

      var events = _.get(state, ['schedule',action.value.year,action.value.month,action.value.day]);
      events = events.splice(action.value.index, 1);      // TODO: THIS IS A MUTATION!

      // TODO: THIS IS MUTATING THE STATE, THEN COPYING THE STATE...
      return Object.assign({}, state, {});

    default:
      return state;
  }

};
