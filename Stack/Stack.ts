// basic implementation of Stack data structure
class Satck<T> {
    private stack: {[key:number]: T};
    private top:number;

    constructor() {
        this.stack = {}; // search, add... O(1)
        this.top = 0;
    }

    isEmpty() { // checking if our list is empty or not
        return this.top === 0;
    }

    push(value: T) { // adding new value in our list
        this.stack[this.top] = value;
        this.top++;
        return;
    }
    
    pop() { // removing element the last  (lIFO)
        if(this.isEmpty()) return;
        const item = this.stack[this.top];
        delete this.stack[this.top];
        this.top--;
        return item;
    }

    peek() { // getting the last added element
        if(this.isEmpty()) return;
        return this.stack[this.top];
    }

    print() { // printing the list
        console.log(this.stack)
    }
}

const stack = new Satck<string>();

stack.push("first");
stack.pop();
stack.isEmpty();
stack.push("here");
stack.print();