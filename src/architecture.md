# Architecture

The platform architecture is completely modular. It uses NATS as the main communications broker both in the Hub device services and to communicate the devices with the platform and between the platform services.

All services are dockerized, using Podman in the Hub appliance services and Kubernetes in the cloud services.
