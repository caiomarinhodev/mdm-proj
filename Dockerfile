FROM mysql:latest

ENV MYSQL_DATABASE mdm_database
ENV MYSQL_ROOT_PASSWORD root_password

COPY ./database.sql /docker-entrypoint-initdb.d/