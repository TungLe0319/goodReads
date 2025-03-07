FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build-env
WORKDIR /app

# Copy everything
COPY *.csproj ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
COPY . ./
RUN dotnet publish -c Release -o out

# Start runtime image
FROM mcr.microsoft.com/dotnet/sdk:9.0
WORKDIR /app
COPY --from=build-env /app/out .
ENV CONNECTION_STRING=
ENV AUTH0_DOMAIN=
ENV AUTH0_AUDIENCE=
# ------------------------------------⬇ replace with your apps name + .dll
ENV ASPNETCORE_URLS=http://*
CMD ["dotnet", "goodReads.dll"]
