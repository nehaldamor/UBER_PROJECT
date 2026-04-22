
# UBER Project

A full-stack ride-sharing application built with Node.js/Express and React.

## Project Structure

### Backend
- **Routes**: User, Captain, Ride, and Maps endpoints
- **Controllers**: Business logic for each module
- **Services**: Database and API interactions
- **Models**: User, Captain, Ride, and BlacklistToken schemas
- **Middleware**: Authentication and authorization

### Frontend
- **Pages**: User/Captain login, signup, home, and riding pages
- **Components**: UI components for ride management
- **Context**: State management for User, Captain, and Socket connections
- **Styling**: Tailwind CSS with PostCSS

## Environment Variables

### Backend (.env)
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAPS_API_KEY=your_maps_api_key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:4000
VITE_MAPS_API_KEY=your_maps_api_key
```

## Installation

```bash
# Backend
cd BACKEND
npm install
npm start

# Frontend
cd FRONTEND
npm install
npm run dev
```
