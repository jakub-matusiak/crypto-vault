# Crypto Vault

The best cryptocurrency portfolio tracker. Stay up to date with your investments, holdings, profits and losses. 

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
docker compose up
```

4. Open [http://localhost](http://localhost) with your browser to see the result.

## Learn More

By default, the app launches in production mode. If you would like to run it in developer mode, create a file named `compose.override.yml` in the root directory of the project and add the following:

```yml
services:
  nextjs:
    command: npm run dev
    volumes:
      - ./:/app
```
