Lab-James Lab-02 Documentation

*index.js contains a function 'orderHexBytes' which calls the module 'fileReader' in file-reader.js in an asynchronous callback format.

*./lib/file-reader.js returns a converted a buffer into a 8 byte hex string from a specified file path to a .txt file.

Tests
*../test/file-reader-test.js tests the fileReader module
*../test/index-test.js tests the orderHexBytes functions
done() tells mocha that the asynchronous test has finished.
