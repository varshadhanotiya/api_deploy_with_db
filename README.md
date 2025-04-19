# Simple Node.js API

A basic REST API built with Express.js

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional):
```
PORT=3000
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a single item
- `POST /api/items` - Create a new item

## Example Usage

Create a new item:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"New Item"}' http://localhost:3000/api/items
```

Get all items:
```bash
curl http://localhost:3000/api/items
``` 