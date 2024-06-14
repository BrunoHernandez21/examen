# ExamenUI

This is a project generated with Express and `node v20.14.0`

# configuration
Please, before running, generate an .env file in the project root with the following properties.

PORT=8080
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=examen

# Development server

to run the project in para dev you can run the command:
`npm run dev`

# Docker production server whit DB
To run the project using Docker please run the following command
`docker build -t examen-api .`

# Docker production server without DB
To run the project using Docker please run the following command
`docker build -t examen:Dockerfile`
make sure to change the .env file to match your new database

