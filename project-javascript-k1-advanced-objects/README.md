# Project JavaScript K1 Advanced Objects

To code this project you need to know:

If you are not familier with them please download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript

## Project Title: Student

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

3. Create a student object with id, firstName, lastName, major, \_gpa fields and a method show that show student info like this:
   `Name: {firstName lastName} (ID:{id} ) Major: {major} GPA: {gpa}`
   Note: Use `this` keyword to access fields in show method.

4. Define a getter method named fullName for student. If first name is empty return Mr/Ms {last name} else return {firstName} {lastName}.

5. Define a setter method named gpa. If gpa is less than 0 or greather than 4 , log error else put it into \_gpa field.

6. Create a factory function named courseFactory. Use arrow function and pass parameters: id, name, credit. It should return an object with these field and
   method named show to log all field into console.

7. Call this function with parameters (1, "Math", 3, ) and assign to `myCourse` variabel. Show call myCourse.show() and check the result.

8. Check that `myCourse` has `teacher` property, if it has log teacher else log no teacher.

9. Create another object named `courseAddition` and set it to `{teacher: "Dr Mark"}`

10. Use object.assign to merge courseAddition into myCourse.

11. Check that `myCourse` has `teacher` property, if it has log teacher else log no teacher.

12. Show all fields and values into `myCourse` with object.keys

## How to deliver this project

Check this link: https://codingwithbasir.com/how-to-deliver-projects/
