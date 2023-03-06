# 1. create docker-compose.yml
# 2. download dockerfile version by using create it file
https://hub.docker.com/_/node

There you many officical image that we can find in docker hub:
https://hub.docker.com/search?image_filter=official&q=
# 3. run commnand to build docker:

```
docker-compose build
```

# 5. build the image:

```
docker-compose up -d
```

# 6. get into container's terminal

```
docker exec -it nodejs sh
```


