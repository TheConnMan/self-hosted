# Self Hosted
A bunch of self-hosted services packed into one Docker host.

## Ubuntu 14.04 Install
**NOTE:** Streama is particularly memory-heavy so everything together requires ~2GB of RAM to run. Removing Streama and its DB reduces the memory requirement to ~1GB.

Run `sudo bash docker-bootstrap.sh` to install Docker and Docker Compose.

To build the required Docker images run `sudo bash build-images.sh`.

Finally, to run everything run `sudo docker-compose up -d` and navigate to the IP or DNS entry for the instance.
