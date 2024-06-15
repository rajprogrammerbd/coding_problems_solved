# **Kubernetes Documentation**

* **What is Kubernetes?** Kubernetes is an application orchestrator. Its also knows as K8S, because there are 8 letter between k and s. In kubernetes, we have Kubernetes Cluster.

* **What is Orchestrator in general?** In general, Orchestrator is someone or somethings that handle multiple things all together.

* **What is cluster in general?** In general Cluster is a set of nodes (VM (Virtual Machine) or Physical Hardware), In addition those are deployed into different platform like AWS, Azure, GCP etc.

> In kubernetes, it consist of Master Node, Worker Node.

In the master node, we have something called ```Control Panel```

and it has contains of,

1. API Server
2. Scheduler
3. Cluster Store
4. Controller Manager
5. Cloud Controller Manager

* **What is API Server?** It's frontend to the kubernetes control panel. All the communication go through API server External and Internal. Expose RESTFull API on port 443.
