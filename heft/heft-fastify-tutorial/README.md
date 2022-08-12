# heft-fastify-tutorial

This project folder demonstrates a sample configuration of the [Heft](https://www.npmjs.com/package/@rushstack/heft)
build system. It illustrates how you can build and test a [Fastify](https://www.fastify.io/) web server or
REST API using Heft.

In this example, running `rushx build` automatically compiles, lints, and runs unit tests, using:

- [TypeScript](https://rushstack.io/pages/heft_tasks/typescript/) compiler
- [ESLint](https://rushstack.io/pages/heft_tasks/eslint/) coding style validator
- [Jest](https://rushstack.io/pages/heft_tasks/jest/) test runner

Please see the [Getting started with Heft](https://rushstack.io/pages/heft_tutorials/getting_started/) article
for more information.

## Local development

Normally when working on a Fastify application, you might use a command like `fastify start --watch`,
so that you can continuously make code changes locally and then test them in your browser.

Instead, we'll rely on Heft's [node-service support](https://rushstack.io/pages/heft_tasks/node-service/),
which will watch for changes in our source code, recompile, and then restart the local fastify server.

```console
rushx start
```

Then navigate in your browser to `http://localhost:3000` to see the sample app. Make a change in the
`/src` folder to automatically recompile and restart your server.

## Web sites, APIs, and static content

This project includes two different types of content: classic "web server" (where the server is returning
finished HTML for display to the browser) and an API (where the server is returning JSON data, which
might then be consumed by a web client written in React or Vue, etc., in the browser).

For the classic HTML approach, this project uses `.ejs` templates, whereas for APIs, it returns
JSON content right from the Fastify request handler. In both cases, example unit tests are provided
that check the responses using Jest's `.toMatchSnapshot()`.

In this example, `.ejs` and `.css` files aren't intended to be compiled, so during the typescript
build they are copied directly into the `/lib` folder along with the rest of the content (this is
configured in `config/typescript.json`).

## Docker

Eventually, we'll need to deploy our application to the internet somewhere. Building a docker image
is often the first step towards then deploying up to a container service like Fargate, Kubernetes, etc.

A sample Dockerfile is included in this project. To build a docker image from a Rush project, we'll
start with a `node` base image, check out our project, build it, _deploy_ it (using `rush deploy`),
then bake a final image with the contents of the deploy (discarding the rest of the monorepo we
don't need for our application).

If you have `docker` installed locally, you can build the image:

```console
rushx build:docker
```

After a couple minutes, this will build a docker image tagged `heft-fastify-tutorial`.

Start it up locally, and confirm it is running:

```console
docker run -it --rm -d -p 8080:80 --name test heft-fastify-tutorial
docker container list
```

Now navigate in your browser to `http://localhost:8080`. You should see the same tutorial app you
saw when running the fastify-cli version.

Stop the running docker container with:

```console
docker kill test
```
