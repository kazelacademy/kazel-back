up:
	docker compose -f dev.yml up --build -d --remove-orphans

down:
	docker compose -f dev.yml down

logs:
	docker compose -f dev.yml logs --follow kazel

db_up:
  docker compose -f .\docker\dev\postgres\dev.yml up -d --build --remove-orphans

db_down:
	docker compose -f .\docker\dev\postgres\dev.yml down

db_logs:
	docker compose -f dev.yml logs --follow db
