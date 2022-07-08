FROM node:14.18.0 as base

# Checkout the current branch from your repo
FROM base as repo

# Uncomment these lines if you use git-lfs
# RUN curl -sLO https://github.com/github/git-lfs/releases/download/v2.0.1/git-lfs-linux-amd64-2.0.1.tar.gz \
#     && tar zxvf git-lfs-linux-amd64-2.0.1.tar.gz \
#     && mv git-lfs-2.0.1/git-lfs /usr/bin/ \
#     && rm -rf git-lfs-2.0.1 \
#     && rm -rf git-lfs-linux-amd64-2.0.1.tar.gz
# RUN git lfs install

WORKDIR /staging/
COPY .git/ .git/
RUN git checkout -- .

# Install rush
FROM repo as rush

# Uncomment these lines if you use Artifactory. If you use a different
# private NPM registry, copy the appropriate environment variables or
# files here.
# ARG ARTIFACTORY_TOKEN
# ARG ARTIFACTORY_USER
# ENV ARTIFACTORY_TOKEN=$ARTIFACTORY_TOKEN
# ENV ARTIFACTORY_USER=$ARTIFACTORY_USER

RUN node common/scripts/install-run-rush.js install

# Build the project
FROM rush as build
RUN node common/scripts/install-run-rush.js build --production --to heft-fastify-tutorial

# Export ("deploy") this project and its dependencies into a single folder
RUN node common/scripts/install-run-rush.js deploy --project heft-fastify-tutorial

# Copy the project and its dependencies into the final layer. We'll discard the intermediate
# layers above, leaving only one layer for the docker image.
FROM node:14.18.0-alpine as final
COPY --from=build /staging/common/deploy /app

ARG PORT
ENV PORT=$PORT
ENV NODE_ENV=production

EXPOSE 80
WORKDIR /app/heft/heft-fastify-tutorial
ENTRYPOINT [ "node", "lib/server.js" ]
