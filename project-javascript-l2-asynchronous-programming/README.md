# Project JavaScript L2 Asynchronous Programing

Topics: The async Keyword,
Writing async Functions,
Handling Dependent Promises,
Handling Errors,
Handling Independent Promises,
Await Promise.all()

## Project Title: Smart House

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

3. When user press energySaving button of smart house remote control, we call these 3 functions sequentially:

   - smartTurnOffLight()
   - smartTurnOffAirConditioner()
   - smartTurnOffWashingMachine()

4. Create async function energySaving() and then call above 3 functions sequentially.

5. function smartTurnOffLight is async and check a current time, if it is between 7am to 6pm it return `TurnOffLight Done` string after 3 seconds else throw exception `Failed to TurnOffLight` after 2 seconds.

6. function smartTurnOffAirConditioner is async and check a current date, if it is summer it return `TurnOffAirConditioner Done` string after 1 seconds else throw exception `Failed to TurnOffAirConditioner` after 3 seconds.

7. function smartTurnOffWashingMachine is async and check a current time, if it is between 2pm to 5pm it return `TurnOffWashingMachine Done` string after 1.5 seconds else throw exception `Failed to TurnOffWashingMachine` after 0.5 seconds.

8. In energySaving function if all functions run successfully console.log("Energy Saving is Off") else show errors.

9. create energySavingConcurrent function and run all 3 functions concurrently. Log the result all functions into console.

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript
