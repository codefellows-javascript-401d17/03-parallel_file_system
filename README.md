the lib directory contains the following files:

file-reader.js

file-reader.js accepts a directory path and a callback as an argument. The directory is then read using fs. An array containing all files is passed to a wrapper function which then uses recursion to iterate through each file. Using the fs module, each file is read as a buffer which is then spliced to the length of 8 bytes. Each of these is console logged and pushed to an array. The containing array will then be returned as a parameter of the callback function.
