# ---------- Stage 1: Build ----------
FROM node:20-bullseye-slim AS build

WORKDIR /app
COPY package*.json ./

# ✅ Force reinstall Rollup binaries correctly
RUN npm install && npm install --force @rollup/rollup-linux-x64-gnu

# Copy rest of the project
COPY . .

# ✅ Build for production
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
