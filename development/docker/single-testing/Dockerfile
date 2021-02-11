# Get node image
FROM node:14

# Set a working director
WORKDIR /usr/testing/app

# Get project from the root folder
COPY . .

# Install pnpm -> node_module -> start the app
RUN npm install -g pnpm && pnpm install

# Open port: 8080
EXPOSE 8080

CMD npm run start
