// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// For example,
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

public class MovingAverage {
    int[] window;
    int index = 0;
    /** Initialize your data structure here. */
    public MovingAverage(int size) {
        this.window = new int[size];
    }
    
    public double next(int val) {
        this.window[index] = val;
        index = (index+1)%this.window.length;
        double ans = 0.0;
        for(int i : window){
            ans += i;
        }
        return ans / this.window.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */
 


