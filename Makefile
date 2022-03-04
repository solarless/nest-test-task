.SILENT:

all: build run

build:
	docker build -t nest-task-build --target build .
	docker build -t nest-task-dist --target dist .

run:
	docker run -d --rm -p 3000:3000 -v nest-task:/usr/src/app/data \
		--name nest-task nest-task-dist

.PHONY: all build run
