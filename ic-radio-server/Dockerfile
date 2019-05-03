FROM openjdk:8-jdk-alpine
COPY /build/libs/ic-radio-server-0.0.1.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

