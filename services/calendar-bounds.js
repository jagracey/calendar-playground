


const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const Calendar = function(){

  function getWeekDayTitles(i){
    return WEEK.concat(WEEK).slice(i, i+7);
  }

  function daysInMonth(year, month) {
    return new Date(year, month+1, 0).getDate();
  }

  function formatOutput(year, month, day){
    return {
        year,
        month,
        monthName: MONTHS[month],
        day,
        date: new Date(year,month,day).toDateString()
    };
  }

  var createCalGrid = function createCalGrid(year, month, startingDayOfWeek,d){
    var monthGrid = Array(6).fill(0).map(()=>[]);
    var monthGridSize = 0;

    var startDate = new Date(year, month, 1);
    var curMonthLength = daysInMonth(year, month);
    var prevMonthLength = daysInMonth(year, month-1);

    let prevOffset = (7 + startDate.getDay() - startingDayOfWeek) % 7 ;

    // Insert Previous Months Context
    for (var i = prevMonthLength - prevOffset; i < prevMonthLength; i++)
      monthGrid[monthGridSize++ / 7 |0 ].push( formatOutput(year, (12 + month-1) % 12, i+1) );

    // Insert Current Month
    for (var i = 1; i <= curMonthLength; i++)
        monthGrid[monthGridSize++ / 7 |0 ].push( formatOutput(year, month, i) );

    // Insert Next Month's Context
    i=0;
    while(monthGridSize < 6*7)
        monthGrid[monthGridSize++ / 7 |0 ].push( formatOutput(year, month+1 % 12,++i) );

    return {  year,
              month: startDate.toLocaleString('en-us', { month: "long" }),
              titles: getWeekDayTitles(startingDayOfWeek),
              grid: monthGrid
            };
  }

  return createCalGrid;
}

export default Calendar() // hides cope in function.
