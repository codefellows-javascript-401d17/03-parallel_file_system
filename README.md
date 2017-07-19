# Callbacks and File System I/O

This app demonstrates using Node Module, File System, to read text files through callback functions. The way this is implemented is by logging the buffer to console in a specific order. Tests are utilized by checking for conditions when the callback has returned data. this was done using Mocha's done() function.

done() is Mocha's callback function which is invoked when your callback function has completed. By using done(), it tells Mocha that the test has completed.