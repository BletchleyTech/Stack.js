module.exports = class Stack {
    constructor() {
        this.#stack = [];
    }
    get size() {
        return this.#stack.length;
    }
    get isEmpty() {
        return this.#stack.length === 0;
    }
    get top() {
        return this.#peek();
    }
    get stack() {
        return this.#stack.join(" | ");
    }
    push(value) {
        this.#stack.push(value);
    }
    pushMany(...values) {
        values.flat().forEach(value => this.push(value));
    }
    pop() {
        return this.#stack.pop();
    }
    #peek() {
        return this.#stack[this.#stack.length - 1];
    }
    clear() {
        this.#stack = [];
    }
}