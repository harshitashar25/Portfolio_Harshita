# Portfolio - Harshita Sharma

A modern, technical portfolio website showcasing projects, experience, skills, and achievements. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/) or install using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** or **bun** (comes with Node.js)
- **MongoDB** - Either:
  - MongoDB Atlas (cloud) - [Sign up for free](https://www.mongodb.com/cloud/atlas)
  - Local MongoDB installation - [Download here](https://www.mongodb.com/try/download/community)

### Installation & Running

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd Portfolio_Harshita
   ```

2. **Install dependencies**
   ```sh
   # Install all dependencies (root, client, and server)
   npm run install:all
   
   # OR install separately:
   npm install                    # Root dependencies
   cd client && npm install      # Client dependencies
   cd ../server && npm install   # Server dependencies
   ```

3. **Set up environment variables**
   ```sh
   # Copy the example environment file to server directory
   cp server/env.example server/.env
   
   # Edit server/.env and add your MongoDB connection string
   # For MongoDB Atlas: Get your connection string from Atlas dashboard
   # For local MongoDB: mongodb://localhost:27017/portfolio
   ```

4. **Start the backend server** (in one terminal)
   ```sh
   npm run dev:server
   # or
   npm run server
   # or navigate to server folder:
   cd server && npm run dev
   ```
   The backend will run on `http://localhost:5000`

5. **Start the frontend development server** (in another terminal)
   ```sh
   npm run dev
   # or navigate to client folder:
   cd client && npm run dev
   ```

   **OR run both together from root:**
   ```sh
   npm run dev:all
   ```

6. **Open your browser**
   - Frontend: `http://localhost:5173` (or the port shown in terminal)
   - Backend API: `http://localhost:5000/api`
   - The page will automatically reload when you make changes

### Available Scripts

**Root (from project root):**
- `npm run install:all` - Install all dependencies (root, client, server)
- `npm run dev` - Start frontend development server
- `npm run dev:server` - Start backend server
- `npm run dev:all` - Start both frontend and backend concurrently
- `npm run build` - Build frontend for production
- `npm run lint` - Run ESLint on client code

**Client (from `client/` folder):**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

**Server (from `server/` folder):**
- `npm run dev` - Start backend server
- `npm start` - Start backend server (production)

### Building for Production

```sh
npm run build
```

The production-ready files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 📋 Project Info

**URL**: https://lovable.dev/projects/a3e44c4a-8fe0-4709-8e5e-b2f30bb1044a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a3e44c4a-8fe0-4709-8e5e-b2f30bb1044a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🛠️ Tech Stack

**Frontend:**
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

**Backend:**
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚢 Deployment

### Option 1: Deploy via Lovable
Simply open [Lovable](https://lovable.dev/projects/a3e44c4a-8fe0-4709-8e5e-b2f30bb1044a) and click on Share -> Publish.

### Option 2: Deploy to Vercel
```sh
npm install -g vercel
vercel
```

### Option 3: Deploy to Netlify
```sh
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Option 4: Deploy to GitHub Pages
```sh
npm run build
# Follow GitHub Pages deployment guide
```

## 📁 Project Structure

```
Portfolio_Harshita/
├── client/                    # Frontend application
│   ├── public/               # Static assets (images, favicon)
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ui/           # shadcn-ui components
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── ...
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── package.json          # Client dependencies
│   ├── vite.config.ts        # Vite configuration
│   ├── tailwind.config.ts    # Tailwind CSS configuration
│   └── tsconfig.json         # TypeScript configuration
│
├── server/                    # Backend application
│   ├── models/               # MongoDB models
│   │   └── Contact.js
│   ├── routes/               # API routes
│   │   └── contact.js
│   ├── index.js              # Server entry point
│   ├── package.json          # Server dependencies
│   └── .env                  # Environment variables (create from env.example)
│
├── package.json              # Root package.json (workspace manager)
├── env.example               # Environment variables template
├── README.md                 # This file
└── SETUP.md                  # Quick setup guide
```

## 🔧 Troubleshooting

### MongoDB Connection Issues

**MongoDB Atlas Setup:**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user (Database Access > Add New User)
4. Whitelist your IP (Network Access > Add IP Address, or use `0.0.0.0/0` for development)
5. Get your connection string (Connect > Connect your application)
6. Update `.env` file with your connection string

**Local MongoDB:**
```sh
# Make sure MongoDB is running locally
mongod

# Use this connection string in .env:
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### Port already in use
If port 5173 (frontend) or 5000 (backend) is already in use:
- Frontend: Vite will automatically try the next available port, or specify: `npm run dev -- --port 3000`
- Backend: Change `PORT` in `.env` file

### Module not found errors
Try deleting `node_modules` and reinstalling:
```sh
# From root directory
rm -rf node_modules client/node_modules server/node_modules
rm -f package-lock.json client/package-lock.json server/package-lock.json
npm run install:all
```

### Backend not connecting to MongoDB
- Check your `server/.env` file has the correct `MONGODB_URI`
- Make sure the `.env` file is in the `server/` directory, not the root
- Verify MongoDB is running (if using local)
- Check MongoDB Atlas network access settings (if using Atlas)
- Look for connection errors in the backend terminal

### CORS errors
The backend is configured to allow CORS from the frontend. If you see CORS errors:
- Make sure the backend is running
- Check that `VITE_API_URL` in `.env` matches your backend URL
- Verify the API endpoint is correct

### Build errors
Make sure all dependencies are installed:
```sh
npm install
npm run build
```

## 🔗 Custom Domain

Yes, you can connect a custom domain!

To connect a domain via Lovable, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📝 License

This project is private and proprietary.

## 👤 Author

**Harshita Sharma**
- Email: harshitas12309@gmail.com
- GitHub: [@harshitashar25](https://github.com/harshitashar25)
- LinkedIn: [Harshita Sharma](https://www.linkedin.com/in/harshita-sharma-627446279/)
