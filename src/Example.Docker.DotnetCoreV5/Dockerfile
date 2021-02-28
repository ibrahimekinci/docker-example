#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

ENV ASPNETCORE_URLS http://+:5005
EXPOSE 5005

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Example.Docker.DotnetCoreV5/Example.Docker.DotnetCoreV5.csproj", "Example.Docker.DotnetCoreV5/"]
RUN dotnet restore "Example.Docker.DotnetCoreV5/Example.Docker.DotnetCoreV5.csproj"
COPY . .
WORKDIR "/src/Example.Docker.DotnetCoreV5"
RUN dotnet build "Example.Docker.DotnetCoreV5.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Example.Docker.DotnetCoreV5.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Example.Docker.DotnetCoreV5.dll"]