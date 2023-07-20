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
}

const q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.peek();
q.dequeue();
q.print();