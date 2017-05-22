
# Getting Started
## Prerequisites
* jdk8
* nodejs
* maven

## Build app and run
```bash
mvn clean
mvn install
cd raspberry-player-backend/target
java -jar raspberry-player-backend-0.0.1-SNAPSHOT.jar
```
## How to develop
### Angular web server
```bash
cd raspberry-player-angular
ng serve
```
Application is working on http://localhost:4200/. The app will will automatically reload if your change something in code.
### Spring boot application
```bash
cd ../raspberry-player-backend
mvn spring-boot: run
```
### Intellij idea
Project works with intellij ultimate and angular plugin.
