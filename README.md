# Crypto Vault

Stay on top of your investments with my Cryptocurrency Portfolio Tracker. Effortlessly manage and monitor all your crypto assets in one place. Track real-time prices, analyze performance, and make informed decisions with advanced analytics. Keep your portfolio secure and up-to-date with our user-friendly interface and robust features. Perfect for both beginners and experienced traders.

## Technologies

* Next.js
* TypeScript
* Tailwind CSS
* daisyUI
* PostgreSQL
* Prisma
* Docker

## Getting Started

This instruction will get you a copy of the project up and running on your local machine for development or testing purposes.

### Prerequisites

You need to have Docker installed on your machine. To install it, follow the instructions on [Docker official website](https://docs.docker.com/).

### Installing

1. Clone the repository:

```bash
git clone https://github.com/jakub-matusiak/crypto-vault
```

2. Navigate to the project directory:

```bash
cd crypto-vault
```

3. Run this command:

```bash
docker compose up -d
```

4. Open [http://localhost](http://localhost) with your browser to see the result.

5. To stop the app, run one of these commands:

```bash
docker compose stop
```

* to stop containers or

```bash
docker compose down
```

* to stop and remove containers.

## Learn More

By default, the app launches in production mode. If you would like to run it in developer mode, create a file named `compose.override.yml` in the root directory of the project and add the following:

```yml
services:
  nextjs:
    command: npm run dev
    volumes:
      - ./:/app
```

## Project status

Still in development.
