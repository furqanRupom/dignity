# Dignity Team Platform

A collaborative learning platform for developer teams with project tracking, learning resources, and community features.

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Frontend Architecture](#frontend-architecture)
3. [Backend API](#backend-api)
   - [Authentication](#authentication)
   - [Projects](#projects)
   - [Learnlogs](#learnlogs)
   - [Resources](#resources)
   - [Events](#events)
   - [Admin](#admin)
4. [Database Schema](#database-schema)
5. [Development Setup](#development-setup)
6. [Deployment](#deployment)
7. [Key Security Considerations](#key-security-considerations)

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **UI**: Lucide React / Phosphor Icons
- **State Management**: React Context (Auth)
- **Form Handling**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + Cookie Sessions
- **Validation**: Zod
- **API Documentation**: Swagger UI

## Key Features
- Protected routes for authenticated users
- Admin dashboard for user verification
- Real-time updates via WebSockets (events)
- Responsive layout with mobile navigation
- Form validation with error handling

## Backend API

### Base URL
`https://api.dignity-team.dev/v1`

### Authentication

#### `POST /auth/register`
```json
{
  "username": "string (3-20 chars)",
  "password": "string (min 6 chars)"
}
```
- New users get `status: "pending"` until admin approval
- Returns 201 on success

#### `POST /auth/login`
```json
{
  "username": "string",
  "password": "string"
}
```
- Returns JWT cookie on success
- Only works for `status: "verified"` users

#### `GET /auth/me`
- Protected route
- Returns current user data

### Projects

#### `GET /projects`
- Returns all public projects
- Filterable by `?status=active|completed`

#### `POST /projects` (Protected)
```json
{
  "title": "string",
  "description": "string",
  "techStack": ["string"],
  "repoUrl": "string (optional)"
}
```

#### `PATCH /projects/:id` (Owner/Admin)
```json
{
  "status": "active|completed"
}
```

### Learnlogs

#### `POST /learnlogs` (Protected)
```json
{
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "resources": ["url"]
}
```

#### `GET /learnlogs`
- Paginated with `?page=1&limit=10`
- Filterable by `?tag=mern`

### Resources

#### `GET /resources`
- Returns all learning resources
- Filterable by `?type=video|article|course`

#### `POST /resources` (Admin)
```json
{
  "title": "string",
  "url": "string",
  "type": "video|article|course",
  "tags": ["string"]
}
```

### Events

#### `GET /events`
- Returns upcoming events
- `?past=true` for previous events

#### `POST /events` (Verified Users)
```json
{
  "title": "string",
  "description": "string",
  "date": "ISO string",
  "duration": "number (minutes)"
}
```

#### `POST /events/:id/join` (Verified Users)
- Join an event

### Admin

#### `GET /admin/users` (Admin)
- Lists all users with filters:
  - `?status=pending|verified|rejected`
  - `?role=user|admin`

#### `PATCH /admin/users/:id` (Admin)
```json
{
  "status": "verified|rejected",
  "role": "user|admin"
}
```

## Database Schema

### User
```typescript
{
  username: string,       // unique
  password: string,       // hashed
  status: 'pending'|'verified'|'rejected',
  role: 'user'|'admin',
  joinedAt: Date,
  lastActive: Date
}
```

### Project
```typescript
{
  title: string,
  description: string,
  createdBy: ObjectId(User),
  techStack: string[],
  status: 'planning'|'active'|'completed',
  repoUrl?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Learnlog
```typescript
{
  title: string,
  content: string,
  author: ObjectId(User),
  tags: string[],
  resources: string[],
  createdAt: Date
}
```

### Event
```typescript
{
  title: string,
  description: string,
  host: ObjectId(User),
  participants: ObjectId(User)[],
  date: Date,
  duration: number, // minutes
  createdAt: Date
}
```

## Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Environment Variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WS_URL=ws://localhost:5000
```

### Backend
```bash
cd backend
npm install
npm run dev
```
Environment Variables:
```env
MONGO_URI=mongodb://localhost:27017/dignity-dev
JWT_SECRET=your-secret-key
ADMIN_KEY=initial-admin-key
PORT=5000
```

## Deployment

### Production Requirements
- MongoDB Atlas cluster
- Redis for session storage
- PM2 process manager
- NGINX reverse proxy

### CI/CD Pipeline
1. Push to `main` triggers build
2. Run test suites
3. Build Docker images
4. Deploy to Kubernetes cluster

## Key Security Considerations

1. **User Verification Flow**
   - New registrations require admin approval
   - Admin dashboard shows pending users
   - Email notifications for status changes

2. **Rate Limiting**
   - 100 requests/minute for auth endpoints
   - 30 requests/minute for other endpoints

3. **Data Validation**
   - All endpoints use Zod validation
   - Sanitize user-generated content

4. **Role-Based Access**
   - Middleware checks user status/role
   - Protected routes for verified users only
