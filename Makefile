.PHONY: frontend
frontend:
	docker compose up frontend --build

.PHONY: build-backend
build-backend:
	cd backend && mvn clean package -DskipTests

.PHONY: backend
backend: build-backend mysql
	docker compose up backend --build

.PHONY: mysql
mysql:
	docker compose up mysql --build -d