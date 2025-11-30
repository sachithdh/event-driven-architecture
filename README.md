# Rabbit

Hi — this is my Rabbit app and the monorepo I use to develop it. I keep the important bits here so I (and anyone helping me) can get started quickly.

This repo is an Nx workspace with several services and a React app called `rabbit`. I use it for local development, quick builds, and running unit/e2e tests.

## Quick start — what I usually run

- Run the Rabbit dev server:

```sh
npx nx serve rabbit
```

- Build the Rabbit app for production:

```sh
npx nx build rabbit
```

- See available targets for the `rabbit` project:

```sh
npx nx show project rabbit
```

There are also several backend services in `apps/` (api-gateway, order-service, payment-service, notification-service). Each has its own serve/build/test targets.

## A few practical notes (my preferences)

- To visualize the workspace graph if you need to understand dependencies:

```sh
npx nx graph
```

- Use Nx for generators when you want to add apps or libs — it keeps things consistent. I usually run generators like:

```sh
npx nx g @nx/react:app demo
npx nx g @nx/react:lib mylib
```

- For CI I connect Nx Cloud (optional) which gives me remote caching and faster CI pipelines:

```sh
npx nx connect
npx nx g ci-workflow
```

## Where to look next

- App code: `apps/rabbit/app` and `apps/rabbit/src`.
- Services: `apps/*-service` folders.
- E2E tests for each app live under the corresponding `-e2e` projects.

## Helpful links

- Nx docs: https://nx.dev
- Nx Console (IDE plugin) — helpful when generating code and running tasks.

## If you want to help

1. Fork/clone.
2. Run `npx nx serve rabbit` and open the app.
3. Run unit tests or the e2e suites in the `*-e2e` projects.

If anything in this README is unclear or out-of-date, open an issue or send a quick note — I maintain this as I work on the project.
