// basic implementation of Queue data structure
class Queue<T> {
    private list: {[key:number]: T};
    private front:number;
    private back: number;
    private size: number;

    constructor() {
        this.list = {};
        this.front = 0;
        this.back = 0;
        this.size =  0;
    }

    isEmpty() { // checking if our list is empty or not
        return this.size === 0;
    }

    enqueue(value: T) { // adding new value in our list
        this.list[this.front] = value;
        this.front++;
        this.size++;
        return;
    }
    
    dequeue() { // removing element from the back  (FIFO)
        if(this.isEmpty()) return;
        const item = this.list[this.back];
        delete this.list[this.back];
        this.back++;
        this.size--;
        return item;
    }

    peek() { // getting the last added element
        if(this.isEmpty()) return;
        return this.list[this.front]
    }

    print() { // printing the list
        console.log(this.list)
    }
}

const queue = new Queue<number>();

queue.enqueue(5);
queue.enqueue(81);
queue.enqueue(1);
queue.enqueue(126);
queue.isEmpty();
queue.peek();
queue.dequeue();
queue.print();