## Docker tips

### To run postgress

docker-compose up -d postgres

### To check containers running

docker-compose ps
docker-compose ps -a

### To entry into the container

docker-compose exec postgres bash

### To get logs

docker container logs container_id

### To create the db

psql -h localhost -d my_store -U diego

#### To list tables

\d+

#### To exit postgres

\q

### To exit image

exit
