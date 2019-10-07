const Node = require('./node');

class LinkedList {
    constructor() {
        this._tail = null;
        this._head = null;
        this.length = 0;
    }

    append(data) {
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = this._head;
        } else {
            this._tail.next = new Node(data);
            this._tail.next.prev = this._tail;
            this._tail = this._tail.next;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        if (this.length > 0 && index < this.length) {
            let myNode = this._head;
            for (let i = 0; i < index; i++) {
                myNode = myNode.next;
            }
            return myNode.data;
        } else {
            return undefined;
        }


    }

    insertAt(index, data) {

        if (this.length > 0 && index < this.length) {
            let myNodeAt = this._head;
            for (let i = 0; i < index; i++) {
                myNodeAt = myNodeAt.next;
            }

            let newIndexNode = new Node(data);
            debugger;
            if (index === 0) {
                myNodeAt.prev = newIndexNode;
                newIndexNode.next = myNodeAt;
                this.length++;
                return this;

            } else if (index > 0 && index < this.length) {
                myNodeAt.prev.next = newIndexNode;
                newIndexNode.prev = myNodeAt.prev;
                newIndexNode.next = myNodeAt;
                myNodeAt.prev = newIndexNode;
                this.length++;
                return this;
            } else {
                return undefined
            };

        }
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (this.length > 0 && index < this.length) {
            let myNodeAt = this._head;
            for (let i = 0; i < index; i++) {
                myNodeAt = myNodeAt.next;
            }

            if (this.length === 1 && index === 0) {
                this.clear();
            } else if (this.length > 1 && index < (this.length - 1)) {
                myNodeAt.prev.next = myNodeAt.next;
                myNodeAt.next.prev = myNodeAt.prev;
                this.length--;
            } else if (this.length > 1 && index === (this.length - 1)) {
                myNodeAt.prev.next = null;
                this.length--;
            }
            return this;

        }
    }

    reverse() {

        let myNode = this._head;
        this._tail = myNode
        for (let i = 0; i < this.length; i++) {
            this._head = myNode;

            let prev = myNode.prev;
            let next = myNode.next;

            myNode.prev = next;
            myNode.next = prev;

            myNode = myNode.prev;

        }

        return this;

    }

    indexOf(data) {
        if (this.length > 0) {
            let myNode = this._head;
            for (let i = 0; i < this.length; i++) {
                if (myNode.data === data) {
                    return i;
                } else {
                    myNode = myNode.next;
                }
            }

            return -1;
        }
    }
}

module.exports = LinkedList;
