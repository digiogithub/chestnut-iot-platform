Object.assign(window.search, {"doc_urls":["intro.html#intro","architecture.html#architecture","hub.html#hub","backend.html#backend","backoffice.html#backoffice","mobile.html#mobile-application"],"index":{"documentStore":{"docInfo":{"0":{"body":61,"breadcrumbs":2,"title":1},"1":{"body":29,"breadcrumbs":2,"title":1},"2":{"body":77,"breadcrumbs":2,"title":1},"3":{"body":47,"breadcrumbs":2,"title":1},"4":{"body":36,"breadcrumbs":2,"title":1},"5":{"body":20,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Chestnut logo Chestnut IoT Platform is a initiative of DIGIO Soluciones Digitales S.L. with the financial support of CDTI (Centro para el Desarrollo Tecnológico Industrial). Chestnut is a high-performance OpenSource platform created to implement IoT solutions horizontally. Chestnut includes: Hub Services Backend and Backoffices Services Configuration of K8s for cloud deployment Chestnut is built on Rust, Crystal Lang and JavaScript to achieve a very versatile platform that can run on any server while achieving a high level of performance. DIGIO Logo With the support of: CDTI Logo","breadcrumbs":"Intro » Intro","id":"0","title":"Intro"},"1":{"body":"The platform architecture is completely modular. It uses NATS as the main communications broker both in the Hub device services and to communicate the devices with the platform and between the platform services. All services are dockerized, using Podman in the Hub appliance services and Kubernetes in the cloud services.","breadcrumbs":"Architecture » Architecture","id":"1","title":"Architecture"},"2":{"body":"The Hub is the main IoT piece of the platform, it is intended to run on ARM-based devices on Debian or Raspbian-based OS. Podman is the service orchestrator for the device. The main services of the device are: The device broker. It allows to get the boot configuration, generate a unique device identifier and interface with the platform services and internal services. Script runner. It is a service that allows to receive NodeJS-based scripts and to be executed in an isolated environment. These scripts are edited and configured online from the platform backoffice. NATS. It is the communication broker, it allows to communicate all the services of the device as well as the load of local historical data. Redis. It is the device history storage, it is designed to add business logic that requires consulting data from previous measurements.","breadcrumbs":"Hub » Hub","id":"2","title":"Hub"},"3":{"body":"Backend services are composed of different modules: The platform broker that performs the main configuration communication between the devices and the platform. The data broker that stores the data measurements generated by the devices in cloud databases. The alert manager that stores the events of the devices that can generate alerts, and in turn keeps an audit log. API Rest backoffice. Allows to work with the platform through API and through the Chestnut backoffice frontend in ReactJS.","breadcrumbs":"Backend » Backend","id":"3","title":"Backend"},"4":{"body":"The platform's backoffice is intended to be mainly simple and easy to use, and at the same time serve as a basis for creating new applications and features. All measurement data are represented on a numerical scale. The backoffice allows to manage access permissions, devices, and device configuration, allowing to insert scripts and edit them in real time on the different devices.","breadcrumbs":"Backoffice » Backoffice","id":"4","title":"Backoffice"},"5":{"body":"The linked mobile application is an easily modifiable React Native based mobile application. It allows provisioning the devices as well as accessing the platform management from any iOS and Android mobile.","breadcrumbs":"Mobile application » Mobile application","id":"5","title":"Mobile application"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"c":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"5":{"tf":1.0}}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.23606797749979},"3":{"tf":1.0}}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":5,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":2.6457513110645907},"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772},"5":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"u":{"b":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"5":{"tf":1.0}},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":2.0}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"df":5,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.7320508075688772},"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"j":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{".":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":2.23606797749979},"2":{"tf":2.449489742783178},"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"ó":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"4":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"d":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"c":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"5":{"tf":1.0}}},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":2.23606797749979},"3":{"tf":1.0}}}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":3,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":5,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":2.6457513110645907},"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772},"5":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"u":{"b":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951},"2":{"tf":2.0}}},"df":0,"docs":{}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}},"o":{"df":1,"docs":{"5":{"tf":1.0}},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":2.449489742783178}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"df":5,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.7320508075688772},"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"j":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{".":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"c":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":2.23606797749979},"2":{"tf":2.449489742783178},"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"ó":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"4":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});