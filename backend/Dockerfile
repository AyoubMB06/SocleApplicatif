# Set the base image
FROM maven:3.8.3-jdk-11

#Expose port
EXPOSE 8082

# create folder for the app 
RUN mkdir -p /home/app

# place in the pwd
WORKDIR /home/app

#copy files
COPY pom.xml .
COPY src ./src

#build the artifact 
RUN mvn clean package -DskipTests

#Execute the app 
CMD  java -jar target/Users-0.0.1-SNAPSHOT.jar
