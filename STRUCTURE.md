# Project Structure Guide

## 📂 Folder Organization

The project is now organized into separate `client/` and `server/` folders for better separation of concerns.

```
Portfolio_Harshita/
├── client/              # Frontend React application
│   ├── src/             # Source code
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│   └── ...
│
├── server/              # Backend Express application
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── index.js         # Server entry point
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables (create this)
│
└── package.json         # Root workspace manager
```

## 🔄 Migration Notes

If you had the project set up before:

1. **Dependencies**: You'll need to reinstall dependencies in the new structure
   ```sh
   npm run install:all
   ```

2. **Environment Variables**: Move your `.env` file to `server/.env`
   ```sh
   mv .env server/.env
   ```

3. **Running the Project**: Use the updated scripts from the root directory
   ```sh
   npm run dev:all        # Run both
   npm run dev            # Frontend only
   npm run dev:server     # Backend only
   ```

## 📦 Package Management

- **Root `package.json`**: Manages workspaces and provides convenience scripts
- **`client/package.json`**: All frontend dependencies (React, Vite, etc.)
- **`server/package.json`**: All backend dependencies (Express, Mongoose, etc.)

## 🚀 Benefits of This Structure

1. **Clear Separation**: Frontend and backend are completely separate
2. **Independent Deployment**: Can deploy client and server separately
3. **Better Organization**: Easier to navigate and maintain
4. **Scalability**: Easy to add more services or microservices later
5. **Team Collaboration**: Frontend and backend teams can work independently

## 🔧 Development Workflow

### Working on Frontend Only
```sh
cd client
npm run dev
```

### Working on Backend Only
```sh
cd server
npm run dev
```

### Working on Both
```sh
# From root
npm run dev:all
```

