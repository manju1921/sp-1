FROM dockerhub.ops.inmobi.com/production-engg/docker-ubuntu-16.04-minimal:v2-20180619-2

WORKDIR /opt/inmobi/

RUN apt-get update || apt-get update \
	&& DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server \
     		&& sed -i "s/127.0.0.1/0.0.0.0/g" /etc/mysql/mysql.conf.d/mysqld.cnf \
	     		&& mkdir /var/run/mysqld \
     				&& chown -R mysql:mysql /var/run/mysqld

#RUN apt-get update || apt-get update \
#	&&apt-get install -y python-pip python-dev build-essential \
#		&& pip install --upgrade pip \
 #       		&& apt-get install python-mysqldb \
  #          			&& pip install MySQL-python

RUN  apt-get install -y python-dev build-essential \
    && apt-get install -y python-mysqldb \
	&& apt-get install -y vim net-tools telnet

COPY setup_db.py /opt/inmobi/

VOLUME ["/var/lib/mysql"]
     
EXPOSE 3306
     
CMD ["mysqld_safe"]
