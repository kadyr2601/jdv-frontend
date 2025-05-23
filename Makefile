build:
	docker-compose up --build -d

logs:
	docker-compose logs -f

down:
	docker-compose down