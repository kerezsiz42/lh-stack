# https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html
FROM bellsoft/liberica-openjre-debian:21-cds AS build
WORKDIR /build

ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=tools -jar application.jar extract --layers --destination extracted

FROM bellsoft/liberica-openjre-debian:21-cds
WORKDIR /application

COPY --from=build /build/extracted/dependencies/ ./
COPY --from=build /build/extracted/spring-boot-loader/ ./
COPY --from=build /build/extracted/snapshot-dependencies/ ./
COPY --from=build /build/extracted/application/ ./

ENTRYPOINT ["java", "-jar", "application.jar"]