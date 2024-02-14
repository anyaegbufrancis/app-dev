# #Build Steps
# FROM node:alpine3.10 as build-step

# RUN mkdir /app
# WORKDIR /app

# COPY package.json /app
# COPY node_modules /app
# COPY public /app/
# COPY src /app/

# COPY . /app

# RUN npm run build

# #Run Steps
# FROM nginx:1.19.8-alpine   
# COPY --from=build-step /app/build /usr/share/nginx/html

# FROM node:18-alpine
# WORKDIR /app/
# COPY public/ /app/public
# COPY src/ /app/src
# COPY package.json /app/
# RUN npm install --force
# EXPOSE 3000
# CMD ["npm", "start"]

# Stage 1: Build the React app
FROM node:14 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine

# Remove the default nginx static content
RUN rm -rf /usr/share/nginx/html/*

RUN chmod -R g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chown -R nginx:0 /usr/share/nginx/html && \
    chmod -R g+rwX /usr/share/nginx/html


# Copy the built React app from the builder stage to the nginx directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port that nginx will liste
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

