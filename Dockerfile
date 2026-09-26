# =========================
# 1. Build Frontend
# =========================

FROM node:22-alpine AS frontend-builder

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend ./

RUN npm run build


# =========================
# 2. Build Backend
# =========================

FROM node:22-alpine

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend ./

# Copy React production build
COPY --from=frontend-builder /app/dist ./public

EXPOSE 3000

CMD ["npm", "start"]