# Install dependencies only when needed
FROM node:20.11-alpine AS deps

WORKDIR /app

# Install dependencies (using npm or yarn based on your project)
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Build the app
FROM node:20.11-alpine AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_DISABLE_ESLINT=true

RUN npm run build

# Production image
FROM node:20.11-alpine AS runner

WORKDIR /app

ENV PORT=3000
ENV NODE_ENV=production

# Copy only the necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
