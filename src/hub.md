# Hub

The Hub is the main IoT piece of the platform, it is intended to run on ARM-based devices on Debian or Raspbian-based OS.

Podman is the service orchestrator for the device.

The main services of the device are:

- The device broker. It allows to get the boot configuration, generate a unique device identifier and interface with the platform services and internal services.
- Script runner. It is a service that allows to receive NodeJS-based scripts and to be executed in an isolated environment. These scripts are edited and configured online from the platform backoffice.
- NATS. It is the communication broker, it allows to communicate all the services of the device as well as the load of local historical data.
- Redis. It is the device history storage, it is designed to add business logic that requires consulting data from previous measurements.
