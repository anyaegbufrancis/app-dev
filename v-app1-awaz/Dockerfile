

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

