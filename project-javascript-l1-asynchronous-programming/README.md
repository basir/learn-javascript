# Project JavaScript L1 Asynchronous Programing

Topics: What is a Promise,
Constructing a Promise Object,
The Node setTimeout() Function,
Consuming Promises,
The onFulfilled and onRejected Functions,
Using catch() with Promises,
Chaining Multiple Promises,
Avoiding Common Mistakes,
Using Promise.all()

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

3. Create function `wash(resolve, reject)` and use `setTimeout` to implements this logic after 1 second:

- Declare `numDishes` and set it to a random integer number between 1 to 10.
- If `numDishes<=7` then log `Wash: Pass` and resolve with `numDishes` as parameter.
- Else class reject with `Wash: Fail` value.

4. Create a new promise with `wash` parameter.

5. Use `then` after the promise to get the `numDishes` and pass it to a new function named `dry`.

6. In the `dry` function create a new promise and inside it use setTimeout with 2 seconds.

7. Inside setTimeout check `numDishes` and if it is less then 3, then log `Dry: Pass` and resolve(numDishes), else reject with `Dry: Fail`

8. Use `then` after previous then in step 5 and get `numDishes` and log `"Done " + numDishes + " Dishes."`

9. If there is an error log "Sorry" and log the exact error into console.

10. Run this program multiple times to get different results.

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript
