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

> Fail-stop failure

In this type of failure, a node in the distributed system halts permanently. However, the other nodes can still detect that node by communicating with it.

> Crash failure

In this type of failure, a node in the distributed system halts silently, and the other nodes can't detect that the node has stopped working.

> Omission failures

In ommission failures, the node fails to send or receive messages. There are two types of omission failures. If the node fails to respond to the incoming request, it's said to be a send omission failure. If the node fails to receive the request and thus can't acknowledge it, it's said to be a receive omission failure.

> Temporal failures

In temporal failures, the node generates correct result, but is too late to be useful, This failure could be due to bad algorithms. A bad design strategy, or a loss of synchronization between the processor clocks.

> Byzantine failures

In Byzantine failures, the node exhibits random behavior like transmitting arbitary messages at arbitrary times, producing wrong result, or stopping midway. This mostly happens due to an attack by a malicious entity or a software bug. A byzantine failure is the most challenging type of failure to deal with.

* **What is Availability?** Availability is the percentage of time that some service or infrastructure is accessible to clients and is operated upon under normal condition.

```(text)
formula (A) = ((total time - the amount of time service was down) / total time) * 100;
```

* **What is Reliability?** Reliability, ```R``` is the probability that time service will perform it's function for a specified time. ```R``` measures how the service performs under varying operating conditions.

We often use `mean time between failures (MTBF)` and `mean time to repair (MTTR)` as metrics to measure ```R```.

```(text)
MTBF = (Total Elapsed Time - Sum of Downtime) / Total Number of Failures

MTTR = Total Maintenance Time / Total Number of Repairs
```

(We strive for a higher MTBF value and a lower MTTR value.)

* **What is the difference Between Reliability and Availability?** Reliability aims to minimize system failures and downtime, while availability aims to maximize operational time.

* **What is scalability?** Scalability is the ability of a system to handle an increasing amount of workload without compromising performance.

The workload can be of different types, including the following:

> **Request workload** This is the number of requests served by the system.
> **Data/storage workload:** This is the amount of data stored by the system.

Here are the different dimensions of scalability:

**Size Scalability:** A system is scalable in size if we can simply add additional users and resources to it.

**Administrative scalability** This is the capacity for a growing number of organizations or users to share a single distributed system with ease.

**Geographical Scalability** This relates to how easily the program can cater to other regions while maintaining acceptable perfomance constraints. In other words, the system can readily service a broad geographical region, as well as a smaller one.

Different approaches of scalability

* **Vertical scalability - scaling up**

Vertical scaling, also known as "scaling up" refers to scaling by providing additional capabilities (for example, additional CPUs or RAM) to an existing device. Vertical scaling allows us to expand our present hardware or software capacity, but we can only grow it to the limitations of our server. The dollar cost of vertical scaling is usually high because we might need exotic components to scale up.

* **Horizontal Scalability - scaling out**

Horizontal scaling, also known as “scaling out,” refers to increasing the number of machines in the network. We use commodity nodes for this purpose because of their attractive dollar-cost benefits. The catch here is that we need to build a system such that many nodes could collectively work as if we had a single, huge server.

> **API Characteristics**

1. Separation between API specification and it's implementation

2. Concurrency

3. Dynamic rate-limiting

4. Security

5. Error Warnings and handling

6. Architectural styles of an API

7. Minimal but comprehensive and cohesive

8. Stateless or state-bearing

9. User adoption

10. Fault tolerance

11. Performance measurement

* **What is transmission link and transmission media?** Simply put, transmission media is the physical substance that carries the data, and the transmission link is the specific route the data takes.
