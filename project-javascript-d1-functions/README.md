# Project JavaScript D1 Functions

Topics: Function Declarations
, Calling a Function
, Parameters and Arguments
, Default Parameters
, Return
, Helper Functions
, Function Expressions
, Arrow Functions
, Concise Body Arrow Functions

## Project Title: Date Formatter

1. Create a html file with your name like john.html

2. Add current code to that file:

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      // your code here
    </script>
  </body>
</html>
```

3. Define variables for date parts:

- year: 2019
- month: 10
- day: 9
- dayOfWeek: 2

All variables are number.

4. Declare a function named `showDayName` that get dayOfWeek (number) and log day name into the console. For example it gets `1` and log `Sunday`, `2` and log `Monday`, etc.

5. Declare a function named `convert2String` that converts a number to string. If number is less that 10, it puts a 0 before it. Example: `2` => `02`

6. Declare a function named `formatDate` with 3 parameters (`year`, `month`, `day`) and return a string with this format `yyyy/mm/dd`. Note: Use `convert2String` function from previous step.

7. Declare a function named `formatDateChristmas` with 3 parameters (`year`, `month`, `day`) and return a the result of `formatDate` function from previous step. Use default parameters to show `2020/01/01` if this function is called without parameters.

8. Declare a function expression named `nextYear` that get a year and return next year. Call `formatDate` with `nextYear(year)` as first parameter and `month` and `day` for next 2 parameters.

9. Declare a function named `formatDateConcised` with arrow functions that implements `formatDate` functionality with concise format.

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript
