FROM dockerhub.ops.inmobi.com/production-engg/docker-ubuntu-16.04-minimal:v2-20180619-2

WORKDIR /opt/inmobi/

RUN apt-get update && apt-get install -y python python-pip libmysqlclient-dev

Run apt-get update

RUN pip install --upgrade pip

RUN pip install Flask flask-mysqldb


#delete
RUN apt-get install -y vim net-tools telnet

COPY service_protfolio/  /opt/inmobi/

CMD ["python", "app.py"]
