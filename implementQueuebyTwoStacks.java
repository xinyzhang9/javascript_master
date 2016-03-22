// Implement Queue by Two Stacks Show result 

// As the title described, you should only use two stacks to implement a queue's actions.

// The queue should support push(element), pop() and top() where pop is pop the first(a.k.a front) element in the queue.

// Both pop and top methods should return the value of first element.

public class Queue {
    private Stack<Integer> stack1;
    private Stack<Integer> stack2;

    public Queue() {
       // do initialization if necessary
       stack1 = new Stack<Integer>();
       stack2 = new Stack<Integer>();
    }
    
    public void push(int element) {
        // write your code here

        stack1.push(element);
    }

    public int pop() {
        // write your code here
        if(stack2.empty()){
            while (! stack1.empty()) {
    			stack2.push(stack1.pop());
    			
    		}
        }
        
        return stack2.pop();
    }

    public int top() {
        // write your code here
        if(stack2.empty()){
            while (! stack1.empty()) {
    			stack2.push(stack1.pop());
    		}
        }
        return stack2.peek();
    }
}