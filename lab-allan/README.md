### file-reader.js
- reads a specified text file and, if no errors are returned, uses buffer to return the first 8 bytes of the file's data as hex string.

### index.js
- calls the fileReader method on each text document in the assets folder and logs the results.

### file-reader-test.js
- tests that an improper file path returns an error
- tests that each of the text documents in the assets folder, when passed into the fileReader method, return a string of the correct length.
