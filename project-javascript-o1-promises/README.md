# Project JavaScript O1 PROMISES

To code this project you need to know:

If you are not familiar with them please download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript

## Project Title: Washing Dishes

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

3. Create function `wash(resolve, reject)` and use `setTimeout` to impelements this logic after 1 second:

- Declare `numDishes` and set it to a random integer number between 1 to 10.
- If `numDishes<=7` then then log `"Wash: Pass"` and resolve with `numDishes` as parameter.
- Else class reject with `"Wash: Fail"` value.

4. Create a new promise with `wash` parameter.

5. Use `then` after the promise to get the `numDishes` and pass it to a new function named `dry`.

6. In the `dry` function create a new promise and inside it use setTimeout with 2 seconds.

7. Inside setTimeout check `numDishes` and if it is less then 3, then log `"Dry: Pass"` and resolve(numDishes), else reject with `"Dry: Fail"`

8. Use `then` after previous then in step 5 and get `numDishes` and log `"Done " + numDishes + " Dishes."`

9. If there is an error log "Sorry" and log the exact error into console.

10. Run this program multiple times to get different results.

## How to deliver this project

Check this link: https://codingwithbasir.com/how-to-deliver-projects/
