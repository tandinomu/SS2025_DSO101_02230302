# Docker Networking and Container Communication

## Practical 2: Running Multi-Container Applications

This practical demonstrates how to run multiple containers and enable communication between them using Docker Compose, as an alternative to individual docker run commands.

## Overview

Using  `docker run` works well when we only need one container. But when there is a need of several containers that work together, it gets complicated and mistakes happen easily. In this practical, I learned:

- How to start multiple containers one by one using docker run
- How to set up a network so containers can talk to each other
- How to use Docker Compose to make everything simpler with just one command

## Exercise Steps

### Setting Up the Application

The exercise uses a sample counter web application consisting of:
- Node.js backend (web containers)
- Nginx reverse proxy
- Redis database for storing the counter value

To set up:

# Clone the repository
![clone](./Images/1.png)

### Building the Images

Build the Nginx image:

![nginx](./Images/2.png)


Build the web image:

![web](./Images/3.png)

### Creating a Network

Before running the containers, create a network for them to communicate through:

![sapp](./Images/4.png)

### Running Containers with Docker Run

Start the Redis container:

![redis](./Images/5.png)

Start the first web container:

![web1](./Images/6.png)

Start the second web container:

![web2](./Images/7.png)

Start the Nginx container:

![nginx](./Images/20.png)

### Verifying Container Communication

Verify that all containers are running:

![ps](./Images/8.png)

Accessed the application in a browser at http://localhost and refresh several times to see load balancing between web1 and web2:
![localhost](./Images/10.png)



![web2localhost](./Images/11.png)


Verify that all containers are running through Docker Desktop Dashboard:

![container](./Images/9.png)



## Key Takeaways

- Container Networking: Docker allows containers to communicate through user-defined networks, enabling complex multi-container applications.

- Network Aliases: Each container can have a network alias which serves as a DNS name, making it easy for containers to find each other by name rather than IP address.

- Docker Compose Advantages:One file manages multiple containers, making setup and scaling easier.

- Nginx as Reverse Proxy: Nginx splits traffic between multiple web servers.

- Container Isolation: Each container performs a single function (web server, database, proxy) 

- Service Discovery: Containers use service names to connect, no IPs needed.