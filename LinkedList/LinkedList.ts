class LinkedListNode<T> {
    public value: T;
    public next: LinkedListNode<T> | null;
	
    constructor(value: T) {
  	this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private size: number;

	constructor() {
  	    this.head = null;
        this.size = 0;
    }
  
    isEmpty() { // check if list is empty
  	    return this.size === 0;
    }
  
    append(value: T) { // add a new node in the last of the list
  	    const node = new LinkedListNode<T>(value);
    
        if(this.isEmpty()) {
    	    this.head = node;
        }else {
    	    let prev = this.head;
            if(!prev) return;

            while(prev.next) {
      	        prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
        return;
    }
  
    prepend(value: T) { // add a new node in the first of list
  	    const node = new LinkedListNode<T>(value);
        if(this.isEmpty()) {
            this.head = node;
            this.size++;
            return;
        }
		node.next = this.head;
        this.head = node;
        this.size++;
        return;
    }
  
    insert(value: T, index: number) { // add a new node in the place you want
  	    if(index < 0 || index > this.size) return "Error";
  
  	    const node = new LinkedListNode<T>(value);
        if(!index) {
    	    this.prepend(value);
        }else{
    	    let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                if(!prev) break;
      	        prev = prev.next;
            }

            if(!prev) return
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
  
    removeFrom(index: number) { // will remove the node from list in that index 
  	    if(index < 0 && index > this.size) return "error";
        let prev = this.head;
        if(!prev) return;

        if(index === 0) {
            this.head = prev.next;
            this.size--;
        }else{
            for(let i = 0; i < index - 1; i++) {
                if(!prev) break;
      	        prev = prev.next;
            }
            if(!prev?.next) return;
            prev.next = prev.next.next;
    	    this.size--;
            return;
        }
        return -1;
    }
  
    removeValue(value: T) { // will remove first giving value in list
  	    if(this.isEmpty()) return null;
    
  	    let prev = this.head;
        if(!prev) return;

   	    if(prev.value === value){
    	    this.head = prev.next;
            this.size--;
            return;
        }
        while(prev.next) {
    	    if(prev.next.value === value) {
			    prev.next = prev.next.next;
                this.size--;
                return;
            }else{
      	        prev = prev.next;
            }
        }
        return -1;
    }
  
    search(value: T) { // search if there is node containes that value
  	    if(this.isEmpty()) return false;
    
        let curr = this.head;
        while(curr) {
    	    if(curr.value === value){
      	        return true;
            }
            curr = curr.next;
        }
        return false;
    }
  
    reverse() { // reversing list
  	    if(this.isEmpty()) return "list is empty";
    
  	    let prevNode = null;
  	    let currNode = this.head;

  	    while (currNode) {
    	    let nextNode = currNode.next;
    	    currNode.next = prevNode;
    	    prevNode = currNode;
    	    currNode = nextNode;
  	    }
  	    this.head = prevNode;
    }
  
    print() { // print all values in string
  	    let res = "";
        let current = this.head;
        while(current) {
    	    res += current.value + ", ";
     	    current = current.next;
        }
        console.log(res)
    }
}

const list = new LinkedList<string>();

list.append("one");
list.append("two");
list.append("three");
list.prepend("zero")
list.print();

list.insert("before-one", 1);
list.print();

list.removeFrom(2);
list.print();

list.removeValue("three");
list.print()

list.search("two") // returns true
list.reverse();
list.print()