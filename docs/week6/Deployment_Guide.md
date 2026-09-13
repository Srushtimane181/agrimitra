# AgriMitra -- Deployment Guide

## 1. Project Overview

AgriMitra is a full-stack agricultural assistance web application that
provides crop information, government scheme information, farming
guidance, authentication, and crop data management.

The application uses a React/Vite frontend, Node.js/Express backend,
MongoDB Atlas database, JWT-based authentication, and REST APIs.

## 2. Production Deployment Architecture

``` text
User Browser
     |
     v
Vercel – React/Vite Frontend
     |
     | HTTPS REST API
     v
Render – Node.js/Express Backend
     |
     | Mongoose
     v
MongoDB Atlas
```

-   Frontend hosting: Vercel
-   Backend hosting: Render
-   Database: MongoDB Atlas
-   Source control: GitHub

## 3. Repository

Combined GitHub repository:

https://github.com/Srushtimane181/agrimitra

The repository contains the frontend and backend as separate
directories.

``` text
agrimitra/
├── frontend/
├── backend/
└── README.md
```

## 4. Prerequisites

The following were used for deployment and testing:

-   GitHub account and repository
-   Node.js and npm
-   MongoDB Atlas account
-   Render account
-   Vercel account
-   Postman for API testing

## 5. MongoDB Atlas Configuration

1.  Create/select a MongoDB Atlas project and cluster.
2.  Create the `agrimitra` database.
3.  Configure a database user.
4.  Allow the deployed backend to connect to the Atlas cluster.
5.  Obtain the MongoDB connection string.
6.  Store the connection string as a server-side environment variable.

The database contains collections such as `users` and `crops`.

**Security:** MongoDB credentials and the connection string must not be
committed to GitHub or included in the public documentation.

### Evidence

![MongoDB Atlas Data Explorer](evidence/03_mongodb_atlas.png)

The screenshot shows the AgriMitra database and stored user records in
MongoDB Atlas.

## 6. Backend Deployment on Render

### Render Configuration

The backend was deployed as a Render Web Service using the combined
GitHub repository.

Configuration:

  Setting          Value
  ---------------- ---------------------
  Service          `agrimitra-backend`
  Runtime          Node
  Branch           `main`
  Root Directory   `backend`
  Build Command    `npm install`
  Start Command    `npm start`
  Database         MongoDB Atlas

Required environment variables were configured in Render:

``` text
MONGO_URI=<private MongoDB Atlas connection string>
JWT_SECRET=<private JWT secret>
```

Actual secret values are intentionally omitted.

### Deployment Verification

Render deployment logs confirmed:

-   Dependencies installed successfully.
-   `npm start` executed successfully.
-   Express server started.
-   MongoDB connected successfully.
-   Render reported that the service was live.

Public backend:

https://agrimitra-h362.onrender.com

### Evidence

![Render Deployment](evidence/01_render_deployment.png)

The screenshot shows a successful live deployment and logs including the
Node server startup and MongoDB connection.

## 7. Frontend Deployment on Vercel

The React/Vite frontend was deployed from the `frontend` directory of
the combined repository.

### Vercel Configuration

  Setting            Value
  ------------------ ----------------------
  Project            `agrimitra-frontend`
  Framework          Vite
  Root Directory     `frontend`
  Build Command      `npm run build`
  Output Directory   `dist`
  Install Command    `npm install`

The frontend API service was configured to communicate with the deployed
Render backend.

### Public Frontend

https://agrimitra-frontend-mu.vercel.app

### Evidence

![Vercel Deployment](evidence/02_vercel_deployment.png)

The screenshot shows the AgriMitra application successfully deployed
through Vercel.

## 8. Production Environment and Security

The following practices were followed:

1.  Database credentials are stored in environment variables.
2.  JWT secret is stored as a server-side environment variable.
3.  `.env` files are not included in the GitHub repository or submission
    ZIP.
4.  Authentication-protected API operations require a valid JWT.
5.  Passwords are stored using bcrypt hashing rather than plain text.
6.  HTTPS is used for the public Vercel and Render endpoints.
7.  JWT tokens are treated as private credentials and are not included
    in reports.
8.  Sensitive authentication setup information is not documented with
    its secret values.

## 9. Deployment Verification and UAT

After deployment, the application was tested through the public frontend
and deployed REST API.

### Frontend UAT

The following were verified:

  Test                     Result
  ------------------------ --------
  Open deployed frontend   PASS
  User registration        PASS
  User login               PASS
  Dashboard access         PASS
  Crops page               PASS
  Crop details page        PASS

### API UAT

A test crop named **Test Rice** was used for deployed CRUD verification.

  Operation   Expected Result             Actual Result                Status
  ----------- --------------------------- ---------------------------- --------
  Create      Crop is created             `201 Created`                PASS
  Read        Crop appears in crop list   `200 OK`                     PASS
  Update      Crop data is modified       Successful update response   PASS
  Delete      Test crop is removed        `200 OK`                     PASS

The temporary **Test Rice** record was deleted after testing so that the
database was not left with a deployment-test record.

### Login Authentication Test

The deployed login API returned:

-   `200 OK`
-   Successful login message
-   JWT token
-   User information

The JWT was then used as a Bearer token for protected crop operations.

### Evidence -- Login

![Postman Login](evidence/06_postman_login.png)

### Evidence -- Create Crop

![Postman Create Crop](evidence/07_postman_create_crop.png)

The screenshot shows `201 Created` and the newly created Test Rice
record.

### Evidence -- Read Crops

![Postman Get Crops](evidence/05_postman_get_crops.png)

The screenshot shows `200 OK` from the deployed crop-list endpoint.

### Evidence -- Delete Crop

![Postman Delete Crop](evidence/04_postman_delete_crop.png)

The screenshot shows `200 OK` and the successful crop deletion message.

## 10. Troubleshooting Guide

### Problem 1: Render service takes a long time to respond

The free Render instance can spin down after inactivity. The first
request after inactivity may therefore take longer.

**Solution:** Wait for the service to wake up and retry the request.

### Problem 2: MongoDB connection failure

Possible causes:

-   Incorrect `MONGO_URI`
-   Database user credentials are incorrect
-   Atlas network access is not configured
-   Cluster is unavailable

**Solution:**

1.  Check the Render environment variable.
2.  Verify the Atlas database user.
3.  Check Atlas Network Access.
4.  Review Render deployment logs.

### Problem 3: JWT authentication failure

Possible causes:

-   Missing Authorization header
-   Invalid/expired JWT
-   Incorrect Bearer Token format

**Solution:**

``` text
Authorization: Bearer <JWT_TOKEN>
```

Generate a fresh token by logging in again if necessary.

### Problem 4: Frontend cannot communicate with backend

Check that:

1.  Render backend is live.
2.  The frontend API base URL points to the Render backend.
3.  The browser is using the deployed frontend.
4.  CORS configuration allows the frontend request.
5.  Browser Network tools show the expected API request.

### Problem 5: Deployment build failure

Check:

-   Node.js version
-   `package.json` scripts
-   Missing dependencies
-   Root directory configuration
-   Render/Vercel deployment logs

## 11. Deployment Result

The AgriMitra application was successfully deployed as a public
full-stack application:

-   React/Vite frontend → Vercel
-   Node.js/Express backend → Render
-   MongoDB database → MongoDB Atlas

The public application and deployed APIs were functionally verified
using frontend UAT and Postman API testing. Authentication and crop CRUD
operations were successfully tested against the deployed backend.

## 12. Evidence Summary

The included `evidence/` folder contains screenshots supporting:

1.  Render deployment success
2.  Vercel frontend deployment
3.  MongoDB Atlas database
4.  Postman login authentication
5.  Postman crop creation
6.  Postman crop listing
7.  Postman crop deletion
