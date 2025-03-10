## Manual installation

 - Install nodejs locally 
 - clone the project
 - install all the dependencies
 - start the DB locally or take take the neone db
 - change .env file and update your db credientials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start


## Docker installation
 - install docker
 - create a network - ` docker network create user_project`
 - start postgres
     - `docker run --network user_project --name postgres_DB -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
 - Build the image - ` docker build --network=host -t user-project .`
 - start the image - ` docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres_DB:5432/postgres --network user_project  -p 3000:3000 user-project`

## Docker Compose installation 
  - Install docker , docker-compose
  - Run - `docker-compose up`