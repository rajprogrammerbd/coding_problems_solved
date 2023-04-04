# **Basic Documentation**

* **What is the difference between concurrency and parallelism?** Concurrency is about multiple tasks which start, run, and complete in overlapping time periods, in no specific order. Parallelism is about multiple tasks or subtasks of the same task that literally run at the same time on a hardware with multiple computing resources like multi-core processor.

* **What is I/O-intensive work in CPU?** I/O intensive is code that uses a lot of I/O (networking or disk, typically) which are operations that are mostly offloaded to the operating system and involve interfacing with external hardware more than they do using lots of CPU.

* **What is cpu intensive work?** Compute-intensive processes are ones that perform IO rarely, perhaps to read in some initial data from a file, for example, and then spend long periods processing the data before producing the result at the end, which requires minimal output.

* **What is Latency?** Time from source sending a packet to destination receiving it.
