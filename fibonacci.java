// Find the Nth number in Fibonacci sequence.

// A Fibonacci sequence is defined as follow:

// The first two numbers are 0 and 1.
// The i th number is the sum of i-1 th number and i-2 th number.
// The first ten numbers in Fibonacci sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

class Solution {
    /**
     * @param n: an integer
     * @return an integer f(n)
     */
    public int fibonacci(int n) {
        // write your code here
        if(n == 1)
            return 0;
        if(n==2)
            return 1;
        int[] fib = new int[n+1];
        fib[0] = 0;
        fib[1] = 0;
        fib[2] = 1;
        
        for(int i = 3; i <= n; i++){
            fib[i] = fib[i-1]+fib[i-2];
        }
        return fib[n];
    }
}