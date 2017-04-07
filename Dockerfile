FROM java:8

EXPOSE 8080

RUN apt-get update

RUN apt-get install -y wget

RUN wget http://mirrors.jenkins.io/war/latest/jenkins.war

CMD ["java", "-jar", "jenkins.war"]