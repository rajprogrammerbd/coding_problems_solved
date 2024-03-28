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
