# **Basic Documentation**

* **Define Node.js** Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

* **What is event loop in node js?** An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks. The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task. The event loop allows us to use callbacks and promises.

* **What are the phases in event loop?** There are six phases process run within node js event loop, down below those are listed:-

> **Timers:** this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.

> **Pending Callbacks:** executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.

> **idle, prepare:** only used internally.

> **poll:** retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks.

> **check:** `setImmediate()` callbacks are invoked here.

> **close callbacks:** some close callbacks, e.g. `socket.on('close', ...)`.

* **Are there any disadvantages of Node.js?** No technology comes without a few disadvantages. Node.js also has a few drawbacks. The main drawback is that Node.js responses can be greatly blocked if an intensive CPU computation is used.

* **What is process.nextTick() function?** Every time the event loop takes a full trip, we call it a tick. When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts.

* **Explain the child process module in Node.js** The child process module allows you to spawn child processes in Node.js. The child process module provides a way to create and control child processes. A child process is a separate instance of the Node.js process that runs concurrently with the parent process.
