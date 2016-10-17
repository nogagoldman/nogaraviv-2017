all:
	webpack -p --progress && ./deploy.sh bin/
