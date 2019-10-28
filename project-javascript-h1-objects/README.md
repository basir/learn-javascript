# Project JavaScript H1 OBJECTS

Topics:
Creating Object Literals
, Accessing Properties
, Bracket Notation
, Property Assignment
, Methods
, Nested Objects
, Pass By Reference
, Looping Through Objects

If you are not familiar with them please download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript

## Project Title: Employee

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

3. Create an `employee` object with Object Literals and define 3 fields for `name`, `age`, and `department` and set values for them.

4. Log them into console like this message:
   "Employee Info: Name: `name`, Age: `age`, Department: `department`"

5. Add a new property to `employee` for `phone number` and set it to `00123456789`. then log it into console like this:
   "Employee `name` number is `phone number`".

   Note: Use bracket notation for `phone number`

6. Define a function name `getPropValue` that gets a object and a property and returns value of the property in that object.

7. Use this function to log `name` and `phone number` into console.

8. Add a method to `employee` named `showVisitCard()` and log all employee properties into console. Then call this method

9. Add a property named `educations` and set it like this:

```javascript
employee.educations = {
  universtiy1: { gpa: 3.5, year: 2019 },
  universtiy2: { gpa: 4.0, year: 2015 },
  universtiy3: { gpa: 3.75, year: 2010 },
  universtiy4: { gpa: 3.0, year: 2005 }
};
```

10. Log educations into console using `for in` command.

11. Calculate average of gpa and log it into console.

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript
