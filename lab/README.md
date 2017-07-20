the lib directory contains the following files:

file-reader.js

file-reader.js accepts a directory path and a callback as an argument. The directory is then read using fs. An array containing all files is passed to a wrapper function which then uses recursion to iterate through each file. Using the fs module, each file is read as a buffer which is then spliced to the length of 8 bytes. Each of these is console logged and pushed to an array. The containing array will then be returned as a parameter of the callback function.

the test directory contains the following files:

file-reader-test.js

file-reader-test.js contains a test for file-reader.js. It tests if the file-reader module throws an error when an incorrect path is passed. Additionally the test check if file-reader logs the files in the specified order.

--------------------------------------------

--done() explanation
Done is used to prevent the test from completing before an asynchronous operation is done executing. done should be placed in the call back of the asynchronous operations call back. Once the operation is called, the done method will be called. done must be passed as a parameter for the callback of the it method executing the test.
