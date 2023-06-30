class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class Linkedlist {

    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertatFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
        return
    }
    // insert last node
    insertatLast(data) {
        // if empty list
        if (!this.head) {
            this.insertatFirst(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
            this.size++;
        }
    }

    // insert at position

    insertatPosition(data, index) {

        if (index < 0 || index > this.size) {
            return;
        }

        if (index == 0) {
            this.insertatFirst(data);
        } else {
            let current = this.head;
            let previous;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            let node = new Node(data);
            previous.next = node;
            node.next = current;
            this.size++
        }

    }

    // delete at position
    deleteatPosition(index){
        if (index < 0 || index > this.size) {
            return;
        }

        if(index==0){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while(count<index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
        this.size--;

        
    }

    // display list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }



    // get at position
    displayIndexData(index){
        if (index < 0 || index > this.size) {
            return;
        }
        let count = 0;
        let current = this.head;
        
        while(current){
            if(count == index){
                console.log(current.data);
                break;
            }
            count++;
            current = current.next;
        }
    }

    // clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }
}
const l1 = new Linkedlist();

l1.insertatFirst(100);
l1.insertatFirst(200);
l1.insertatFirst(300);
l1.insertatPosition(400,3);
// l1.deleteatPosition(3);
// l1.insertatLast(300);


l1.display();
console.log(l1.size);

console.log(" ");
l1.displayIndexData(3);
console.log(" ");

l1.clearList();
l1.display();

// 