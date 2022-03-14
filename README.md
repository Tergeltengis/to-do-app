# To Do app

`To Do` is an example of MERN Stack backend(folder structure) developed by Tergeltengis.

## Toolchain

| Tool    | Version    |
| ------- | ---------- |
| Node    | `^14.15.4` |
| Yarn    | `^1.x.x`   |
| Postman | `^1.x.x`   |

## Setup

1. Install Node version `^14.15.4` (via nvm or other) and ensure the project uses one a compatible version locally

2. Run `yarn` to install dependencies

3. Create `.env` file with following content:

```
MONGODB_HOST=mongodb://localhost:27017/todo
```

(MongoDB atlas connection string can be used)

4. Run `yarn start` to run.

5. Ready to check endpoint using Postman.

```
http://localhost:5000/tasks (GET,POST,DELETE)
```

## Testing

In local environment, we need to start MongoDB server on `localhost:27017`.

Run `yarn test` for testing.
`yarn coverage` for coverage.
