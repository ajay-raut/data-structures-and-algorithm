class Queue{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    enqueue(element){
        this.items[this.count] = element;
        console.log(`${element} pushed at position ${this.count}`);
        this.count++;
        return this.items[this.count-1];
    }

    dequeue(){
        if(this.count==0) return undefined;
        let deletedItem = this.items[0];
        for(let i = 0 ;i<this.count-1;i++){
            this.items[i] = this.items[i+1];
        }
        this.count --;
        this.items.length = this.count;
        console.log(`${deletedItem} removed from queue.`);
        return deletedItem;
    }

    print(){
        for(let i=0;i<this.count;i++){
            console.log(this.items[i]);
        }
    }

    peek(){
        console.log(`${this.items[0]} is peek element.`);
        return this.items[0];
    }

    isEmpty(){
        console.log(this.count==0 ? "Queue is empty" : "Queue is not empty");
        return this.count==0;
    }

    size(){
        console.log(`${this.count} elements in Queue.`);
        return this.count;
    }

}

const q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.size();
q.peek();
q.isEmpty();
q.dequeue();
q.dequeue();
q.dequeue();
q.isEmpty();
q.size();
q.print();