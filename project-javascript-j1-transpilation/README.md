# Project JavaScript J1 Brower Transpilations

Topics: Finding browser compatibility
, Why ES6?
, Transpilation With Babel
, npm init
, Install Node Packages
, .babelrc
, Babel Source Lib
, Build

If you are not familiar with them please download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript

## Project Title: Computer Platform Name

1. Install node.js on your computer from https://nodejs.org/en/download/

2. Open terminal and run `node -v` and check node version. If you get error you have not installed node.js.

3. Create a new folder named `your-name` inside this folder.

4. Open this folder in VSCode by running this command in terminal `code your-name`

5. Go to this folder and create a new folder named `src` and create file named `index.js` inside `src`

6. Edit `index.js` in VSCode to log `Hello Node.js` into console.

7. Open Menu Terminal> New Terminal and enter this command:

```shell
$ node src/index.js
```

7. Congrats. You have written your first program in `Node.js`. Press Ctrl+C to exit from program.

8. Write this code inside `index.js`

```javascript
import os from "os";
console.log("Platform: " + os.platform());
```

In this code we have used `import` command that isn't currently enabled in Node.js.
So we need to convert it to lower version like ES5 with babel.

9. run `npm init` in terminal to create a node.js application. For all questions press enter.

10. install packages to use babel with this commands in terminal:

```shell
$ npm install babel-cli -D
$ npm install babel-preset-env -D

```

11. Create file named `.babelrc` and add this code to it:

```javascript
 {
  "presets": ["env"]
 }
```

12. Edit package.json like this to add two commands:

```javascript
"scripts": {
"build": "babel src -d prod",
"start": "node prod"
}

```

13. Run `npm run build`. This command runs `babel src -d prod` that convert javascript files inside `src` folder to ES5 version so that they can be run on Node.js.

14. Run `npm run start`. This command runs `node prod/index.js` run the project and log your platform name like `win32` into console.

15. Use this file and folder structure to code in modern javascript like ES6, ES7, ... .

## Want to get reviewed?

Send Pull Request. Check how to deliver your code: https://codingwithbasir.com/how-to-deliver-projects/

## Need help?

Download Learn JavaScript eBook from https://codingwithbasir.com/learn-javascript
