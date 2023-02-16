# Start with the .NET Core SDK
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine3.14 AS build-env

# Set the working directory
WORKDIR /app

# Copy everything and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application code and build
COPY . ./
RUN dotnet publish -c Release -o out

# Start runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build-env /app/out .

# Set the environment variable
ENV ASPNETCORE_URLS=http://*:80

# Run the application
CMD ["dotnet", "goodReads"]
