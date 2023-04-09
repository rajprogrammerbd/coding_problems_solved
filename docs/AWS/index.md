# **AWS Concept Documentation**

* **What is cloud computing?** Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. Instead of buying, owing, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage and databases.

* **Cloud computing models** There are three types of model available mentioned down below,

> **Public Cloud**: They are owned and operated by a third-party cloud service providers, which deliver their computing resources like server and storage over the internet.

> **Private Cloud:** Cloud computing resouces used exclusively by a single business or organisation. A private cloud can be physically located on the company's on-site datacenter.

> **Hybrid Cloud:** Hybrid cloud combine public and private clouds bound together by technology that allows data and application to be shared between them.

* **Cloud computing services** There are three types of computing services available,

> **SaaS** (Software as a service) Software on remote servers.

> **PaaS** (Platform as a service) Application development and deployment.

> **IaaS** (Infrastructure as a service) Servers, Stroage, Operating System.

* **Benefits of cloud computing**

1. Reduce IT costs.
2. Scalabity
3. Global Infrastructure
4. Up-to-date
5. Reliable backup and disaster recovery

* **What is Amazon EC2?** Amazon Elastic compute cloud (Amazon EC2) provides scalable computing capacity in the amazon web services (AWS) cloud. Using amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy appliction faster. EC2 is a IaaS.

**Note**: The vitural computing servers are known as Instances in EC2.

* **What is Amazon Machine Image (AMI)** is a template that contains a software configuration (for example, an opeating system, an application server, and appliction). From an AMI, you launch an instance, which is a copy of the AMI running as a virtual server in the cloud.

The root device for your instance contains the image used to boot the instance. The root device is either an Amazon Elastic block store (Amazon EBS) volumn or an instance store volumn.

**Note:** When you lunch an instance, the instance type that you specify determines the hardware of the host computer used for your instance, Each instance type offers different compute, memory, and storage capabilities, and grouped in an instance family based on those capabilities.

Amazon EC2 provides each instance with a consistent and predictable amount of CPU capacity, regardless of it's underlying hardware.
