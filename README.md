# **Stack.js**

Stack.js provides a simple, fast, and flexible implementation of the stack data structure built natively in JavaScript.

## **Installation**

```shell
$ npm install @bletchley-tech/stack
```

## **Usage**

Stack provides a simple implementation of the stack data structure built natively in JavaScript for use in Node.js.

The package provides a single class, Stack, which is a simple implementation of the stack data structure. To use it, follow the steps below:

1) Import/Require the Stack class:

    ```javascript
    // CommonJS
    const Stack = require('@bletchley-tech/stack');

    // ES6+
    import Stack from '@bletchley-tech/stack';
    ```

    This will load the Stack class into the global scope.

2) Create a new instance of Stack:

    ```javascript
    const stack = new Stack();
    ```

    This will create a new instance of Stack and store it in the stack variable.

3) Use the stack:

    ```javascript
    stack.push(1); // Push 1 to top of the stack
    stack.stack; // "a"
    stack.pop(); // Pop the top item from the stack
    ```

    This will push 1 to the top of the stack, print the updated stack, and then pop the top item from the stack.

## **Stack Class**

The Stack class has only one property, stack, which is an array of values. The specific functionality of the stack data structure is provided through class methods.

### **Class Methods**

#### *push(value)*

The push method adds a value to the top of the stack.

```javascript
stack.push("string"); // Push "string" to top of the stack
```

#### *pushMany(values)*

The pushMany method will push all of the values to the top of the stack.

```javascript
stack.pushMany("string2", "string3"); // Push "string2" and "string3" to top of the stack

// or

stack.pushMany(["string2", "string3"]); // Push "string2" and "string3" to top of the stack
```

#### *pop()*

The pop method will pop the top item from the stack.

```javascript
stack.pop(); // Pop the top item from the stack
```

#### *clear()* 

The clear method will clear the stack.

```javascript
stack.clear(); // Clear the stack
```

### **Class Attributes**

#### *size*

```javascript
stack.size; // Get the size of the stack
```

This will return the size of the stack.

#### *isEmpty*

```javascript
stack.isEmpty; // Check if the stack is empty
```

This will return true if the stack is empty, false otherwise.

#### *top*

```javascript
stack.top; // Get the top item from the stack
```

This will return the top item from the stack.

#### *stack*

```javascript
stack.stack; // Print the stack as a formatted string
```

This will return the stack as a formatted string.

## **License**

Stack is licensed under the MIT License (see the [LICENSE](LICENSE) file for more information).