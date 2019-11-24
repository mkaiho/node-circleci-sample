FROM node:12-alpine as builder
COPY "middlewares" "/work/middlewares"
COPY "routes" "/work/routes"
COPY [\
  "app.ts",\
  "server.ts",\
  "package.json",\
  "yarn.lock",\
  "tsconfig.json",\
  "/work/"]
WORKDIR /work
RUN yarn \
&& yarn build

FROM node:12-alpine
COPY --from=builder "/work/dist" "/app/dist"
COPY --from=builder "/work/node_modules" "/app/node_modules"
COPY --from=builder [\
  "/work/package.json",\
  "/work/yarn.lock",\
  "/app/"]
WORKDIR /app
ENTRYPOINT [ "yarn", "start" ]
