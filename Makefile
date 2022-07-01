up:
	docker compose -f dev.yml up --build -d --remove-orphans

down:
	docker compose -f dev.yml down

logs:
	docker compose -f dev.yml logs --follow
