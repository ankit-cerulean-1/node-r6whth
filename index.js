const app = require('express')();

/**
 * Problem Statement: Given list of items in array find Longest string in array
 * Input: List of Elements
 * Output: Longest string
 * To Run Program type : 'node index.js' in terminal and wait
 * To inspect and check console logs right click and inspect in chrome.
 */
var getLongestString = (req, res) => {
  let input = ['fan', 'table', 'books', 'computer', 'table'],
    output = 'Display Longest string in Array';

  /** Write down your code here */

  /** Logic Ends */

  res.send('<h3>' + output + '</h3>');
};

app.get('/', getLongestString);

app.listen(3000, () => {
  console.log('Started listening');
});
