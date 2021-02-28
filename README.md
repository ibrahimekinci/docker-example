############# Sık kullanılanlar ###################

#Kodlar#
docker compose build
docker compose up -d

############# Sık kullanılanlar ###################

############# Notlar ###################

docker-compose.yml docker compose 'un beklediği varsayılan dosyadır.
.env  docker'ın varsayılan environment dosyasıdır.
.dockerignore  docker'ın varsayılan ignore dosyasıdır.
.dockerfile  docker'ın varsayılan dosyasıdır.
core projeleri içerisindeki Dockerfile dosyaları microsf tarafından oluşturulan dosyadır. Port atama harihi bir şey değiştirilmemiştir.

############# Notlar ###################

############# docker-compose.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose.yml
.docker/nginx
src/Example.Docker.DotnetCoreV2/Docerfile
src/Example.Docker.DotnetCoreV3/Docerfile
src/Example.Docker.DotnetCoreV5/Docerfile

#Kodlar#
docker compose build
docker compose up -d

############# docker-compose.yml ###################

############# docker-compose-basic.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose-basic.yml
src/Example.Docker.DotnetCoreV5/Docerfile

#Kodlar#
docker compose build -f docker-compose-basic.yml
docker compose up -d -f docker-compose-basic.yml

############# docker-compose-basic.yml ###################

############# docker-compose-advanced.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose-advanced.yml
src/Example.Docker.DotnetCoreV3/Docerfile
src/Example.Docker.DotnetCoreV5/Docerfile

#Kodlar#
docker compose build -f docker-compose-advanced.yml
docker compose up -d -f docker-compose-advanced.yml

############# docker-compose-advanced.yml ###################


############# docker-compose-dotnet-core-v2.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose-dotnet-core-v2.yml
.docker/nginx-dotnet-core-v2
src/Example.Docker.DotnetCoreV2/Docerfile

#Kodlar#
docker compose build -f docker-compose-dotnet-core-v2.yml
docker compose up -d -f docker-compose-dotnet-core-v2.yml

############# docker-compose-dotnet-core-v2.yml ###################

############# docker-compose-dotnet-core-v3.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose-dotnet-core-v3.yml
.docker/nginx-dotnet-core-v3
src/Example.Docker.DotnetCoreV3/Docerfile

#Kodlar#
docker compose build -f docker-compose-dotnet-core-v3.yml
docker compose up -d -f docker-compose-dotnet-core-v3.yml

############# docker-compose-dotnet-core-v3.yml ###################

############# docker-compose-dotnet-core-v5.yml ###################

#İhtiyaç duyduğu dosyalar#
docker-compose-dotnet-core-v5.yml
.docker/nginx-dotnet-core-v5
src/Example.Docker.DotnetCoreV5/Docerfile

#Kodlar#
docker compose build -f docker-compose-dotnet-core-v5.yml
docker compose up -d -f docker-compose-dotnet-core-v5.yml

############# docker-compose-dotnet-core-v5.yml ###################
