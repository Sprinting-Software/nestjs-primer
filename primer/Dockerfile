# Install node on ubuntu
FROM ubuntu:20.04 AS base

# Install Node and NPM
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y \
    && apt-get install curl -y \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get update -y \
    && apt-get install nodejs -y \
    && npm install -g npm@latest \
    && npm cache clean --force \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /etc/apt/sources.list.d/* \
    && apt-get clean \
    && mkdir -p /app/ \
    && useradd -u 1001 -r -g 0 -d /app -M -s /sbin/nologin -c "App User" default \
    && chmod 775 /app \
    && chown -R default:root /app

# Build the image used for test running 
FROM base as tester

# Install packages in cachable way
COPY --chown=default:root package-lock.json /app/
COPY --chown=default:root package.json /app/

USER default
WORKDIR /app
RUN npm ci && npm cache clean --force

# Copy source code
COPY --chown=default:root . /app/
RUN npm run build

# Intermediate image to drop the dev dependencies
FROM tester AS intermediate

RUN npm prune --omit=dev

# Build the image running the code
FROM base AS server

USER default
WORKDIR /app/

COPY --from=intermediate --chown=default:root /app/dist /app/dist
COPY --from=intermediate --chown=default:root /app/node_modules /app/node_modules

CMD ["npm", "run", "start:prod"]