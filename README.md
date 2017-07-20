# Lab 03 parallel file system

this app reads files in the asset directory and console logs the first 8 hex bytes of the file.

the done() is important in mocha to indicate that the asynchronous test it complete. without declaring done the test will fail and throw a timeout error.
