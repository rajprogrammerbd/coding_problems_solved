# **System design**

* **Terms that mostly used in system design**

How to transfer data at large scale

* *non-blocking*
* *buffering and batching*
* *network protocols*
* *message formats*
* *load balancing*
* *partitioning*
* *consistent hashing*

How to aggregate data efficently

* *push vs pull*
* *deduplication*
* *checkpointing*
* *data enrichment*
* *embedded database*
* *state management*
* *fallback*

How to store data reliably

* *reverse proxy*
* *coordination service*
* *health checking*
* *peer and service discovery*
* *replication*
* *quorum*
* *avilability zone*

How to retrieve data quickly

* *aggregate pm write*
* *eventual consistency*
* *denormalization*
* *data rollup*
* *hot and cold stroage*
* *polyglot persistence*
* *distributed cache*

* **What is abstraction?**
Abstraction is the art of obfuscating details that we don't need. It allows us to concentrate on the big picture.

* **What is Transactions in database?**
A transactions in the context of a database is like a unit of work. Imagine it as a single task or a set of related actions that we perform on a database. For example, Read, Write, Commit etc.

* **What is database abstraction?**
Transactions is a database abstraction that hides many problematic outcomes when concurrent users are reading, writing, or mutating the data and gives a simple interface of commit, in case of success, or abort, in case of failure.

* **What is interprocess communication?**
Interprocess communication (IPC) refers to the machanisms provided by an operating system that allow processes to communicate with each other and synchronize their actions.

* **What is an RPC(Remote Procedure calls)?**
RPC is an interprocess communication protocol that's widely used in distributed system.
<br />
<br />
RPC mechanisms are employed when a computer program causes a procedure or subroutine to execute in a separate address space.

* **What is the consistency model in distributed system?**
A consistency model in distributed system is like a set of rules that govern how different parts of the system communicate with each other. It decides how the system behaves when there are changes or error.

* **Different types of failure**

> Fail-stop

In this type of failure, a node in the distributed system halts permanently. However, the other nodes can still detect that node by communicating with it.

> Crash

In this type of failure, a node in the distributed system halts silently, and the other nodes can't detect that the node has stopped working.

> Omission failures

In ommission failures, the node fails to send or receive messages. There are two types of omission failures. If the node fails to respond to the incoming request, it's said to be a send omission failure. If the node fails to receive the request and thus can't acknowledge it, it's said to be a receive omission failure.

> Temporal failures

In temporal failures, the node generates correct result, but is too late to be useful, This failure could be due to bad algorithms. A bad design strategy, or a loss of synchronization between the processor clocks.

> Byzantine failures

In Byzantine failures, the node exhibits random behavior like transmitting arbitary messages at arbitrary times, producing wrong result, or stopping midway. This mostly happens due to an attack by a malicious entity or a software bug. A byzantine failure is the most challenging type of failure to deal with.
