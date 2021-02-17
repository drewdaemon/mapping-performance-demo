FROM postgis/postgis:11-3.1

# Have to do this so that we can use the shp2pgsal util
RUN apt-get clean && apt-get update --allow-unauthenticated
RUN apt-get install -y postgis

COPY ./datasets /datasets
# scripts in this folder are executed at database init time (see postgres docker image docs)
COPY ./init_db.sh /docker-entrypoint-initdb.d/
