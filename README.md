<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <h1 align="center">Trip Planner Microservices (NestJS + MongoDB)</h1>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository contains a monorepo implementation of a Trip Planner system built using NestJS and MongoDB, architected with TCP microservices communication.

## Project setup

```bash
$ yarn install
```

## MongoDB Docker instance

```bash
ℹ️ DockerHub or Rancher must be running on backgroud

# From the root of the project run the following command
$ docker compose up -d
```

## Compile and run the project

```bash
# run trip-api-gateway on a dedicated terminal shell
$ nest start trip-api-gateway --watch

# run trip-search on a dedicated terminal shell
$ yarn run start:dev

# run trips on a dedicated terminal shell
$ yarn run start:prod
```

## Run tests

```bash
# tests
$ yarn run test
```

## Structure

This project is organized as a **monorepo**, containing the following applications:

### Applications

* **`trip-api-gateway/`**: Public HTTP interface exposing REST endpoints to clients.
* **`trip-search/`**: Microservice responsible for filtering and sorting trips based on user queries.
* **`trips/`**: Microservice responsible for CRUD operations on trip data, persisting to MongoDB.

### Gateway Modules

The gateway orchestrates requests to:

* `/trips` → Forwards to `trips`
* `/trip-search` → Forwards to `trip-search`

## Features

* CRUD APIs for managing trips (origin, destination, cost, duration, etc.)
* Trip search with support for `origin`, `destination`, and `sort_by` (e.g., cheapest, fastest)
* Clean DTO structure with consistent response format (`id` instead of `_id`, and no `__v`)
* End-to-end and unit test coverage for services and controllers

## Why Microservices with TCP?

* **Decoupling**: Services like search and storage evolve independently
* **Performance**: TCP is lighter than HTTP, with lower overhead for inter-service communication
* **Scalability**: Each service can be scaled or deployed separately
* **Maintainability**: Clear boundaries make codebase easier to understand and extend

## Communication Flow

```text
Client (REST HTTP)
     |
     v
trip-api-gateway (REST API)
     |
     |-- [TCP] --> trips (MongoDB storage)
     |
     |-- [TCP] --> trip-search (Filter/Sort logic)
```

### API Endpoints

* `POST /trips`
* `GET /trips`
* `GET /trips/:id`
* `PUT /trips/:id`
* `DELETE /trips/:id`
* `GET /trip-search?origin=XXX&destination=YYY&sort_by=cheapest|fastest`

## Stay in touch
- Author - [Matteo Fonsatti](https://www.linkedin.com/in/matteo-fonsatti-b02a998a/)

