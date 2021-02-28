#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

ENV ASPNETCORE_URLS http://+:5003
EXPOSE 5003

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Example.Docker.DotnetCoreV3/Example.Docker.DotnetCoreV3.csproj", "Example.Docker.DotnetCoreV3/"]
RUN dotnet restore "Example.Docker.DotnetCoreV3/Example.Docker.DotnetCoreV3.csproj"
COPY . .
WORKDIR "/src/Example.Docker.DotnetCoreV3"
RUN dotnet build "Example.Docker.DotnetCoreV3.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Example.Docker.DotnetCoreV3.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Example.Docker.DotnetCoreV3.dll"]