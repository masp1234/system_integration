docker run -v "$(pwd)/scripts:/" --rm --name pg -e POSTGRES_PASSWORD=123 -d postgres