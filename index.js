const app = require('express')();

/**
 * Problem Statement: Given list of items in array find Longest string in array
 * Input: List of Elements
 * Output: Longest string
 * To Run Program type : 'npx nodemon index.js' in terminal and wait
 * To inspect and check console logs right click and inspect in chrome.
 */
var getLongestString = (req, res) => {
  let input = ['fan', 'table', 'books', 'computer', 'table'],
    output = '?';

  /** Write down your code here */

  /** Logic Ends */

  res.send(
    ' <h1 style="color:red">Timer: <span id="displayDiv"></span><h1> Output: ' +
      output +
      '</h1>' +
      `<script>
      const COUNTER_KEY = 'my-counter';

      function countDown(i, callback) {
        //callback = callback || function(){};
          timer = setInterval(function () {
          let minutes=0, seconds = 0;
          minutes = parseInt(i / 60, 10);
          seconds = parseInt(i % 60, 10);
          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          if(window.sessionStorage.getItem(COUNTER_KEY)){
            i = window.sessionStorage.getItem(COUNTER_KEY);
            minutes = parseInt(i / 60, 10);
            seconds = parseInt(i % 60, 10);
          }
          if (i-- > 0) {
            window.sessionStorage.setItem(COUNTER_KEY, i);
          } else {
            clearInterval(timer);
            callback();
          }

          window.document.getElementById('displayDiv').innerHTML =
          '0:' +
          minutes +
          ':' +
          seconds;

        }, 1000);
      }
      countDown(60, () => {});
      </script>`
  );
};

app.get('/', getLongestString);

app.listen(3000, () => {
  console.log('Started listening');
});
