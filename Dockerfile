# Use Node base image
FROM node:18-bullseye-slim

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy rest of the app
COPY . .

# Build Backstage
RUN yarn build

# Expose port (Backstage default)
EXPOSE 7007

# Start backend
CMD ["yarn", "start"]