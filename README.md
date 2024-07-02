# E-commerce Platform Microservices

## Overview

This project consists of three microservices: Product Service, Cart Service, and Order Service. These services are built with Node.js and containerized using Docker. They are managed using Kubernetes and exposed via the Kong API Gateway. Continuous delivery is managed using ArgoCD, following a GitOps approach. Monitoring and alerting are handled using Prometheus and Grafana.

## Microservices

1. **Product Service**
    - **Purpose**: Manages the product catalog, including adding, updating, retrieving, and deleting products.
    - **Endpoints**:
        - Retrieve a list of products.
        - Retrieve details of a specific product.
        - Add a new product.
        - Update an existing product.
        - Delete a product.

2. **Cart Service**
    - **Purpose**: Manages user shopping carts, including adding, updating, and removing items from the cart.
    - **Endpoints**:
        - Retrieve the cart for a specific user.
        - Add an item to the user's cart.
        - Update an item in the user's cart.
        - Remove an item from the user's cart.

3. **Order Service**
    - **Purpose**: Handles order processing, including creating, updating, and retrieving orders.
    - **Endpoints**:
        - Retrieve orders for a specific user.
        - Create a new order.
        - Update an existing order.
        - Cancel an order.

## Key Technologies and Tools

1. **Docker**
    - **Purpose**: Containerizes applications to ensure they run consistently across different environments. Each microservice is packaged into a Docker container.
    - **Role in Application**: Ensures the microservices are isolated, portable, and easy to deploy.

2. **Kubernetes**
    - **Purpose**: Automates the deployment, scaling, and management of containerized applications.
    - **Role in Application**: Manages the deployment and scaling of the microservices, ensuring high availability and resilience.

3. **Kong API Gateway**
    - **Purpose**: Acts as a gateway for routing requests to the appropriate microservices. Provides load balancing, authentication, and other essential API management features.
    - **Role in Application**: Manages API traffic and routes requests to the microservices.

4. **ArgoCD**
    - **Purpose**: Manages the deployment of the application using a GitOps approach, ensuring that the state of the cluster matches the configurations defined in the Git repository.
    - **Role in Application**: Provides continuous delivery and deployment of the application.

5. **Prometheus and Grafana**
    - **Purpose**: Prometheus is an open-source systems monitoring and alerting toolkit. Grafana is an open-source platform for monitoring and observability that integrates with Prometheus.
    - **Role in Application**: Prometheus collects and stores metrics, while Grafana visualizes these metrics and sets up alerting rules.

## Project Structure

```
e-commerce-manifests/
├── product-service.yaml
├── cart-service.yaml
├── order-service.yaml
├── ingress.yaml
├── prometheus/
│   └── prometheus-config.yaml
│   └── prometheus-deployment.yaml
│   └── prometheus-service.yaml
├── grafana/
│   └── grafana-deployment.yaml
│   └── grafana-service.yaml
└── README.md
```

## Setup Guide

### Step 1: Install Kong Ingress Controller

1. Create a namespace for Kong.
2. Install Kong using Helm.

### Step 2: Define Kubernetes Service and Deployment YAML Files

Create YAML files for the Product Service, Cart Service, and Order Service. Each service should have its deployment and service configuration.

### Step 3: Define Ingress Resource for Kong

Create an Ingress resource to route traffic to the appropriate microservices.

### Step 4: Set Up ArgoCD

1. Install ArgoCD.
2. Access the ArgoCD API Server.
3. Retrieve the ArgoCD initial admin password.
4. Login to ArgoCD and set the admin password.

### Step 5: Create and Sync ArgoCD Application

1. Create an ArgoCD application to manage the Kubernetes resources.
2. Sync the application to deploy the resources.

### Step 6: Set Up Prometheus and Grafana

1. Create a namespace for Prometheus.
2. Create Prometheus ConfigMap, Deployment, and Service.
3. Create Grafana Deployment and Service.

### Step 7: Configure Prometheus as a Data Source in Grafana

1. Access Grafana by port-forwarding the Grafana service.
2. Add Prometheus as a data source in Grafana by setting the appropriate URL.
3. Create dashboards to visualize metrics.

### Step 8: Set Up Alerts in Grafana

1. Create alerting rules in Grafana.
2. Configure notification channels.
3. Link alerts to the configured notification channels.

### Step 9: Test the Setup

1. Check the status of the deployments, services, and pods.
2. Verify the Kong Ingress Controller status.
3. Test the endpoints using curl or a web browser.
4. Verify Prometheus connectivity and Grafana data source configuration.

### Debugging Tips

1. Check logs of the microservice pods.
2. Check logs of the Kong Ingress Controller.
3. Describe resources for more details.
4. Check ArgoCD application events.


This detailed README documentation provides a comprehensive guide for setting up the microservices, Kong API Gateway, ArgoCD, Prometheus, and Grafana configuration, as well as instructions for testing and debugging the setup.