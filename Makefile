up:
	docker compose -f dev-db.yml up --build -d --remove-orphans

down:
	docker compose -f dev-db.yml down

logs:
	docker compose -f dev-db.yml logs --follow
