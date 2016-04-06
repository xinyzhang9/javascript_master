// The API: int read4(char *buf) reads 4 characters at a time from a file.

// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        var buffer = [];
        var endOfFile = false;
        var readBytes = 0;
        while(readBytes < n && !endOfFile){
            cur = read4(buffer);
            if(cur !== 4){
                endOfFile = true;
            }
            var len = Math.min(n-readBytes, cur);
            for(var i = 0; i < len; i++){
                buf[readBytes + i] = buffer[i];
            }
            readBytes += len;         
        }
        return readBytes;
    };
};