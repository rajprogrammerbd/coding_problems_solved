# **Basic Documentation**

* **What is the difference between concurrency and parallelism?** Concurrency is about multiple tasks which start, run, and complete in overlapping time periods, in no specific order. Parallelism is about multiple tasks or subtasks of the same task that literally run at the same time on a hardware with multiple computing resources like multi-core processor.

* **What is I/O-intensive work in CPU?** I/O intensive is code that uses a lot of I/O (networking or disk, typically) which are operations that are mostly offloaded to the operating system and involve interfacing with external hardware more than they do using lots of CPU.

* **What is cpu intensive work?** Compute-intensive processes are ones that perform I/O rarely, perhaps to read in some initial data from a file, for example, and then spend long periods processing the data before producing the result at the end, which requires minimal output.

* **What is Latency?** Time from source sending a packet to destination receiving it.

* **What is Bandwidth?** Maximum amount of data that can be transferred on physical communication path in one go.

* **What is continuous integration?** Continuous integration is a development practics in which the developers are required to commit changes to the source in a shared repository several times a day or more frequently.

* **What is Fibonacci Sequence?** the Fibonacci sequence is a sequence in which each number is the sum of the two previous ones.

* **What is Dynamic Programming?** A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

* **What is Thread Pool in NodeJs?** The worker pool (aka thread pool) is an execution model that spawns and handles separate threads, which then synchronously perform the task and return the result to the event loop. The event loop then executes the provided callback with said result.

* **How does the cluster module works in node js?** Node.js introduce the cluster module, which creates multiple copies of the same application on the same machine and has them running at the same time. It also comes with a load balancer that every distributes the load among the processes using the round-robin algorithm.

* **How does the worker threads modules works in node js?** In node.js, worker threads come handy when doing large JavaScript task, Worker makes it simpler to run JavaScript coding in parallel using threads, making it considerably faster and more efficient. We can complete difficult jobs without disrupting the main thread.

* **How does the child_process works in node js?** The node js child process module provides the ability to spawn child processes in a similar manner to popen.

There are three major way to create child process:

* child_process.exec()
* child_process.spawn()
* child_process.fork()

> The child_process. spawn() method launches a new process with a given command. This method returns streams (stdout & stderr) and it is generally used when the process returns large amount of data.

* **Examples of must-known concept of string:** Here we are providing you with some must-know concepts of string:

> **Subsequence and substring** – A subsequence is a sequence that can be derived from a string deleting one or more elements. A substring is a contiguous segment of the string.

> Reverse and rotation in a string – Reverse operation is interchanging the position of characters of a string such that the first becomes the last, the second becomes the second last, and so on.

**Binary String** – A binary string is a string made up of only two types of characters.

**Palindrome** – A palindrome string is a string in which the elements at the same distance from the center of the string are the same. Lexicographic pattern – Lexicographical pattern is the pattern based on the ASCII value or can be said in dictionary order.

**Pattern searching** – Pattern searching is searching a given pattern in the string. It is an advanced topic of string.

**What is runtime environment in node js?** – The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.

**What is Subarrays?** - In general, for an array of size n, there are n*(n+1)/2 non-empty subarrays. For example, Consider the array [1, 2, 3, 4], There are 10 non-empty sub-arrays. The subarrays are: (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4), and (1,2,3,4).

**What is Subsequences?** A subsequence is a sequence that can be derived from another sequence by removing zero or more elements, without changing the order of the remaining elements.

**What is Subset?** If a Set has all its elements belonging to other sets, this set will be known as a subset of the other set.
