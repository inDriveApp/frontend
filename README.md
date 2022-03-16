# frontend

## Build inicial em docker

### Fora do docker

* docker run --rm -it -v ./inDrive/frontend/:/home -p 3000:3000 ubuntu:20.04

### Dentro do docker
1. apt update && apt install -y curl && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
2. cd home/
3. chmod 777 -R ./*
4. npm install
5. npm start
