# AgriMitra – Front-End Application

## Week 4: Front-End and Back-End Integration

AgriMitra is a user-friendly agricultural web application designed to provide farmers with useful agricultural information and resources in one place.

In Week 4, the React front-end was integrated with the Node.js/Express back-end APIs developed in the previous weeks. The application now communicates with the backend using asynchronous API requests, processes dynamic data, handles loading and error states, and displays data retrieved from MongoDB Atlas.


## Features

- Responsive landing page
- User registration through backend API
- User login through backend API
- JWT-based authentication
- Authenticated user profile
- Dashboard with backend user information
- Dynamic crop information from MongoDB
- Dynamic crop details using MongoDB document IDs
- Create, read, update and delete crop API integration
- Loading states during API requests
- Error handling for API/network failures
- Frontend form validation
- Crop information
- Crop disease information
- Government schemes
- Farming tips
- User profile
- Feedback
- Sticky responsive navigation bar
- Mobile, tablet, and desktop responsive design
- Navigation between multiple views/pages


## Front-End and Back-End Integration

The front-end communicates with the backend through REST APIs.

### Integration Flow

User
↓
React Front-End
↓
API Request using fetch()
↓
Node.js / Express Backend
↓
Controller
↓
Mongoose
↓
MongoDB Atlas
↓
API Response
↓
React State
↓
Updated UI



## Integrated APIs

### Authentication APIs

| Operation | Method | Endpoint |
|---|---|---|
| Register User | POST | `/api/auth/register` |
| Login User | POST | `/api/auth/login` |
| Get Profile | GET | `/api/auth/profile` |

### Crop APIs

| Operation | Method | Endpoint | Authentication |
|---|---|---|---|
| Create Crop | POST | `/api/crops` | JWT Required |
| Get All Crops | GET | `/api/crops` | Public |
| Get Crop | GET | `/api/crops/:id` | Public |
| Update Crop | PUT | `/api/crops/:id` | JWT Required |
| Delete Crop | DELETE | `/api/crops/:id` | JWT Required |


## Authentication Integration

The login form sends the user's email and password to the backend.

POST /api/auth/login


After successful authentication, the backend returns a JWT token.

The token is stored in browser localStorage using:

agrimitraToken


Authenticated requests include the token using the HTTP Authorization header:

Authorization: Bearer <JWT_TOKEN>


The profile API is protected using JWT authentication.



## API Service

A reusable API service was created at:


src/services/api.js


The service provides a common function for making HTTP requests to the backend.

Example:
const API_BASE_URL = "http://localhost:5000/api";

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};


This avoids repeating API request logic across multiple React components.


## Dynamic Crop Integration

The Crop Information page was changed from static hard-coded data to backend-driven data.

The React application requests:

GET /api/crops


The response is stored in React state and displayed dynamically.

Crop details are accessed using the MongoDB document ID:


GET /api/crops/:id


This allows the same React page to display details for different crops.


## CRUD Integration Testing

The following crop operations were successfully tested:

| Test                                 | Result |
| ------------------------------------ | ------ |
| Create Rice                          | Passed |
| Get All Crops                        | Passed |
| Get Rice Details                     | Passed |
| Create Wheat                         | Passed |
| Get Wheat Details                    | Passed |
| Create Maize                         | Passed |
| Get Maize Details                    | Passed |
| Create Tomato                        | Passed |
| Get Tomato Details                   | Passed |
| Update Rice                          | Passed |
| Verify Updated Rice in Front-End     | Passed |
| Delete Tomato                        | Passed |
| Verify Tomato Removed from Front-End | Passed |

After updating Rice through the PUT API, the updated description was displayed in the React Crop Details page.

After deleting Tomato through the DELETE API, the Tomato card disappeared from the React Crop Information page after refreshing the data.


## Error Handling

The front-end uses `try...catch` blocks around asynchronous API requests.

Loading states are displayed while API requests are being processed.

Errors are displayed to the user instead of allowing the application to crash.

### Tested Error Cases

#### Invalid Login

Incorrect login credentials were tested from the React login page.

Result:

Login error displayed


#### Missing JWT Token

The protected Profile API was tested without a JWT token.

Result:

401 Unauthorized


with:

Not authorized. Token required.


#### Backend Unavailable

The backend server was intentionally stopped while accessing the Crop Information page.

Result:


Failed to fetch

The frontend handled the network failure without crashing.


## Network Testing

Browser Developer Tools were used to verify communication between the React frontend and Express backend.

The following request was observed in the browser Network tab:

GET http://localhost:5000/api/crops


Response status:

200 OK


This confirms that the React application successfully communicates with the backend API.

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* React Router DOM
* Fetch API
* Vite
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* npm
* Git
* GitHub
* Postman
* Google Chrome Developer Tools


## Project Structure

agrimitra-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   ├── data/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Crops.jsx
│   │   ├── CropDetails.jsx
│   │   ├── DiseaseLibrary.jsx
│   │   ├── DiseaseDetails.jsx
│   │   ├── Schemes.jsx
│   │   ├── SchemeDetails.jsx
│   │   ├── FarmingTips.jsx
│   │   ├── Profile.jsx
│   │   └── Feedback.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


## Running the Front-End

### 1. Install dependencies

Open a terminal in the frontend directory:

npm install


### 2. Start the development server

npm run dev


The application will normally be available at:

http://localhost:5173


## Backend Requirement

The AgriMitra backend must be running for API-integrated features such as:

* Registration
* Login
* Profile
* Crop information
* Crop details

Start the backend using:
node server.js


The backend normally runs at:

http://localhost:5000


## Integration Validation

The Week 4 integration was validated from both the user and developer perspectives.

### User Perspective

* Registration works through the backend.
* Login works through the backend.
* User information is displayed after authentication.
* Crop information is dynamically loaded.
* Crop details are dynamically loaded.
* API errors are handled without application crashes.

### Developer Perspective

* REST APIs are consumed using asynchronous fetch requests.
* JWT authentication is used for protected endpoints.
* React state is used for dynamic API data.
* Loading and error states are implemented.
* Browser Network tools were used to verify API communication.
* Postman was used to validate backend API behavior.



## Security Measures

* Password authentication is handled by the backend.
* Passwords are not stored directly in the React application.
* JWT is used for protected API requests.
* Protected crop operations require authentication.
* Protected profile access requires authentication.
* Unauthorized requests are rejected by the backend.
* `.env` and `node_modules` are excluded from version control.


## Week 4 Outcome

The AgriMitra front-end was successfully integrated with the back-end REST APIs.

The application now supports authenticated communication, dynamic crop data retrieval, crop CRUD operations through APIs, asynchronous data handling, loading states, error handling, and frontend-to-backend validation.

The integration was verified using Postman, MongoDB Atlas, React UI testing, and Chrome Developer Tools.

## Week 5 – Testing, Debugging and Optimization

### Testing Strategy

The frontend was tested using Vitest and React Testing Library. The tests verify page rendering, form validation, API interaction, successful operations, and error handling.

### Automated Test Results

- Test Suites: 5/5 passed
- Tests: 15/15 passed
- Success Rate: 100%
- Latest Test Execution Time: 11.52 seconds

### Test Coverage

#### Home Page
- Main heading display
- Get Started navigation link
- Service section display

#### Login Page
- Empty field validation
- Successful login
- JWT token and user data storage
- Navigation to dashboard
- API error handling

#### Register Page
- Empty field validation
- Password mismatch validation
- Password length validation
- Successful registration
- Navigation to login

#### Crops Page
- Crop data loading from API
- Dynamic crop information display
- API error handling
- Empty crop list handling

#### API Service
- Successful API response handling
- Failed API request handling

### Debugging

During frontend testing, an incorrectly placed test file was initially not detected by Vitest. The test was moved to the correct `src/test` directory.

An ESLint configuration issue was also identified. Vitest test functions such as `describe`, `test`, `expect`, and `beforeEach` were initially reported as undefined. The ESLint flat configuration was updated to recognize the testing globals and support JSX syntax.

After the configuration fixes, ESLint completed successfully with zero errors and zero warnings.

### Performance

The production build was tested using Vite.

Latest production build results:

- Vite version: 8.2.1
- Modules transformed: 40
- Build time: 607 ms
- HTML size: 0.46 kB
- CSS size: 15.58 kB
- CSS gzip size: 2.69 kB
- JavaScript size: 257.44 kB
- JavaScript gzip size: 79.56 kB

The application uses asynchronous API requests and conditional rendering for loading, success, empty-data, and error states. This improves the user experience during API communication.

### Code Quality

ESLint was executed successfully after configuring the testing environment.

Result:

- ESLint errors: 0
- ESLint warnings: 0

The frontend also uses reusable components and a centralized API service for backend communication.