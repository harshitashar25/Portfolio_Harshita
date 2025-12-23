# Quick Setup Guide - MongoDB Contact Form

## 🚀 Quick Start

1. **Install dependencies**
   ```sh
   # From root directory - installs all (root, client, server)
   npm run install:all
   
   # OR install separately:
   npm install                    # Root
   cd client && npm install       # Client
   cd ../server && npm install    # Server
   ```

2. **Set up MongoDB**
   - Option A: MongoDB Atlas (Recommended)
     - Sign up at https://www.mongodb.com/cloud/atlas
     - Create a free cluster
     - Get your connection string
   - Option B: Local MongoDB
     - Install MongoDB locally
     - Use: `mongodb://localhost:27017/portfolio`

3. **Configure environment**
   ```sh
   # Copy env.example to server directory
   cp env.example server/.env
   
   # Edit server/.env and add your MONGODB_URI
   ```

4. **Start the application**
   ```sh
   # From root directory - start both frontend and backend
   npm run dev:all
   
   # OR start separately:
   # Terminal 1: Backend (from root)
   npm run dev:server
   # OR from server directory:
   cd server && npm run dev
   
   # Terminal 2: Frontend (from root)
   npm run dev
   # OR from client directory:
   cd client && npm run dev
   ```

5. **Test the contact form**
   - Open http://localhost:5173
   - Navigate to the Contact section
   - Fill out and submit the form
   - Check MongoDB to see the saved message

## 📝 Environment Variables

Create a `.env` file in the `server/` directory:

```sh
cp env.example server/.env
```

Edit `server/.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

Optional: Create `client/.env` for frontend API URL (if different from default):

```env
VITE_API_URL=http://localhost:5000/api
```

## 🔍 Verify It's Working

1. **Backend Health Check**
   ```sh
   curl http://localhost:5000/api/health
   # Should return: {"status":"OK","message":"Server is running"}
   ```

2. **Test Contact Form**
   - Fill out the form on the website
   - Check browser console for any errors
   - Check backend terminal for success message
   - Verify data in MongoDB

## 🐛 Common Issues

- **"Cannot connect to MongoDB"**: Check your MONGODB_URI in .env
- **"CORS error"**: Make sure backend is running on port 5000
- **"404 on /api/contact"**: Verify backend server is running

## 📚 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/:id` - Get single message
- `PATCH /api/contact/:id/read` - Mark as read
- `GET /api/health` - Health check

