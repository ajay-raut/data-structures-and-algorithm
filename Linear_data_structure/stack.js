class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`pushed ${element} at ${this.count} position.`);
        this.count++;
        return this.items[this.count - 1];

    }

    pop() {
        if (this.count == 0) return undefined;
        // this.items[]
        let deletedItem = this.items[this.count - 1];
        this.count--;
        console.log(`poped ${deletedItem}`)
        return deletedItem;
    }

    peek() {
        if (this.count == 0) return undefined;
        console.log(`first element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    isEmpty() {
        console.log(this.count == 0 ? "empty" : "not empty");
        return this.count == 0;
    }

    checkSize() {
        console.log(`elements in stack ${this.count}`);
        return this.count;
    }

    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
        return str;

    }

    clear(){
        this.items = [];
        this.count = 0;
        console.log("stack cleared.");
        return this.items;
    }
}

const s1 = new Stack();

s1.push(100);
s1.push(200);
s1.push(300);
s1.clear();
s1.print();
s1.checkSize();
s1.peek();
s1.pop();
s1.isEmpty();
s1.print();
s1.pop();
s1.peek();
s1.pop();
s1.isEmpty();
s1.checkSize();
