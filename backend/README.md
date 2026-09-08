

\# AgriMitra – Back-End API



\## Week 4: Front-End and Back-End Integration



AgriMitra is an agricultural assistance web application designed to provide farmers with useful agricultural information and resources.



The back-end provides RESTful APIs for:



\- User registration and login

\- JWT-based authentication

\- Protected user profile access

\- Crop data management

\- MongoDB Atlas data persistence

\- Secure password handling

\- Error handling and API validation



During Week 4, the AgriMitra back-end was integrated with the React front-end. The integration was validated using Postman, MongoDB Atlas Data Explorer, browser testing, and Chrome Developer Tools.



\---



\## Features



\- RESTful API using Node.js and Express.js

\- MongoDB Atlas database integration

\- Mongoose ODM

\- User registration

\- User login

\- Password hashing using bcryptjs

\- JWT-based authentication

\- Protected user profile API

\- Crop management APIs

\- Complete Crop CRUD operations

\- Mongoose schema validation

\- HTTP status code based error handling

\- CORS configuration

\- Environment variable configuration using dotenv

\- API testing using Postman

\- React front-end integration using Fetch API



\---



\## Technologies Used



| Technology | Purpose |

|---|---|

| Node.js | JavaScript runtime |

| Express.js | REST API development |

| MongoDB Atlas | Cloud database |

| Mongoose | MongoDB ODM |

| JWT | Authentication |

| bcryptjs | Password hashing |

| CORS | Cross-origin communication |

| dotenv | Environment variable management |

| Nodemon | Development server |

| Postman | API testing |

| Git | Version control |

| GitHub | Source code hosting |



\---



\# Back-End Architecture



The back-end follows a modular architecture that separates routes, controllers, models, middleware, and database configuration.





React Front-End

&#x20;      |

&#x20;      | HTTP Request

&#x20;      ↓

Express.js Server

&#x20;      |

&#x20;      ↓

Routes

&#x20;      |

&#x20;      ↓

Authentication Middleware

&#x20;      |

&#x20;      ↓

Controllers

&#x20;      |

&#x20;      ↓

Mongoose Models

&#x20;      |

&#x20;      ↓

MongoDB Atlas

&#x20;      |

&#x20;      ↓

JSON Response

&#x20;      |

&#x20;      ↓

React Front-End





\### Architecture Components



1\. \*\*React Front-End\*\*



&#x20;  \* Sends HTTP requests to the back-end.

&#x20;  \* Displays API responses to the user.



2\. \*\*Express.js Server\*\*



&#x20;  \* Receives and processes HTTP requests.

&#x20;  \* Provides REST API endpoints.



3\. \*\*Routes\*\*



&#x20;  \* Define API endpoints for authentication and crop operations.



4\. \*\*Middleware\*\*



&#x20;  \* Verifies JWT tokens for protected requests.



5\. \*\*Controllers\*\*



&#x20;  \* Implement authentication and crop management logic.



6\. \*\*Mongoose Models\*\*



&#x20;  \* Define the structure of MongoDB documents.

&#x20;  \* Perform database operations.



7\. \*\*MongoDB Atlas\*\*



&#x20;  \* Stores user and crop information.



\---



\# Project Structure





agrimitra-backend/

│

├── config/

│   └── db.js

│

├── controllers/

│   ├── authController.js

│   └── cropController.js

│

├── middleware/

│   └── authMiddleware.js

│

├── models/

│   ├── User.js

│   └── Crop.js

│

├── routes/

│   ├── authRoutes.js

│   └── cropRoutes.js

│

├── .gitignore

├── package.json

├── package-lock.json

├── server.js

└── README.md



\---



\# Database Configuration



MongoDB Atlas is used as the cloud database for AgriMitra.



The database connection is handled through:



config/db.js



The MongoDB connection string and JWT secret are stored using environment variables.



Example `.env` configuration:

MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_jwt\_secret

PORT=5000





The `.env` file is excluded from Git using `.gitignore` to prevent sensitive credentials from being committed to the repository.



\---



\# API Base URL



When running the back-end locally:

http://localhost:5000





The API base path is:



```text

http://localhost:5000/api





\---



\# Authentication APIs



\## 1. Register User



\### Endpoint





POST /api/auth/register



\### Description



Registers a new AgriMitra user.



\### Example Request





{

&#x20; "name": "Srushti",

&#x20; "email": "srushti.test@example.com",

&#x20; "password": "your\_password"

}





\### Successful Response



The API returns a confirmation message and basic user information.



Example:

{

&#x20; "message": "User registered successfully.",

&#x20; "user": {

&#x20;   "id": "USER\_ID",

&#x20;   "name": "Srushti",

&#x20;   "email": "srushti.test@example.com"

&#x20; }

}





\---



\## 2. Login User



\### Endpoint





POST /api/auth/login





\### Description



Authenticates an existing user.



\### Example Request





{

&#x20; "email": "srushti.test@example.com",

&#x20; "password": "your\_password"

}





\### Successful Response



A successful login returns a JWT token.



The token is used for accessing protected APIs.



Example:





{

&#x20; "message": "Login successful.",

&#x20; "token": "<JWT\_TOKEN>",

&#x20; "user": {

&#x20;   "id": "USER\_ID",

&#x20;   "name": "Srushti",

&#x20;   "email": "srushti.test@example.com"

&#x20; }

}





\---



\## 3. Get User Profile



\### Endpoint

GET /api/auth/profile





\### Authentication



JWT Required



\### Authorization Header





Authorization: Bearer <JWT\_TOKEN>





\### Description



Returns the profile information of the authenticated user.



\### Example Response





{

&#x20; "message": "Profile fetched successfully.",

&#x20; "user": {

&#x20;   "\_id": "USER\_ID",

&#x20;   "name": "Srushti",

&#x20;   "email": "srushti.test@example.com"

&#x20; }

}



A request without a valid JWT token is rejected by the authentication middleware.



\---



\# Crop APIs



The back-end provides complete CRUD operations for crop information.



CRUD stands for:



\* Create

\* Read

\* Update

\* Delete



\---



\## 1. Create Crop



\### Endpoint





POST /api/crops





\### Authentication



JWT Required



\### Example Request





{

&#x20; "name": "Rice",

&#x20; "description": "Rice is an important cereal crop requiring warm temperatures and adequate water for cultivation.",

&#x20; "waterRequirement": "High",

&#x20; "suitableSoil": "Clayey and loamy soil",

&#x20; "season": "Kharif"

}



\### Response



The API creates a new crop document in MongoDB Atlas.



\---



\## 2. Get All Crops



\### Endpoint





GET /api/crops





\### Authentication



Public



\### Description



Returns all crop records stored in MongoDB Atlas.



\### Example Response Structure





{

&#x20; "count": 3,

&#x20; "crops": \[]

}

The actual count depends on the current contents of the database.



\---



\## 3. Get Crop by ID



\### Endpoint





GET /api/crops/:id



\### Authentication



Public



\### Description



Returns information for a specific crop using its MongoDB document ID.



Example:





GET /api/crops/CROP\_ID





\---



\## 4. Update Crop



\### Endpoint





PUT /api/crops/:id





\### Authentication



JWT Required



\### Description



Updates an existing crop record.



Example:





PUT /api/crops/CROP\_ID





The updated crop data is returned in the response.



\---



\## 5. Delete Crop



\### Endpoint





DELETE /api/crops/:id





\### Authentication



JWT Required



\### Description



Deletes an existing crop record from MongoDB Atlas.



Example:



DELETE /api/crops/CROP\_ID



\---



\# API Testing



The back-end APIs were tested using \*\*Postman\*\*.



Testing included authentication, authorization, crop CRUD operations, and error handling.



\---



\## Authentication Testing



| Test Case                  | Result                    |

| -------------------------- | ------------------------- |

| User Registration          | Passed                    |

| User Login                 | Passed                    |

| Get Profile with Valid JWT | Passed                    |

| Get Profile without JWT    | Passed – 401 Unauthorized |



\### Unauthorized Profile Test



When the profile endpoint was requested without a JWT token, the API returned:

401 Unauthorized





Response message:





Not authorized. Token required.





This confirms that the authentication middleware correctly protects the profile endpoint.



\---



\# Crop CRUD Testing



The following crop operations were tested successfully using Postman and the React front-end.



| Test Case             | Result |

| --------------------- | ------ |

| Create Rice           | Passed |

| Get All Crops         | Passed |

| Get Rice Details      | Passed |

| Create Wheat          | Passed |

| Get Wheat Details     | Passed |

| Create Maize          | Passed |

| Get Maize Details     | Passed |

| Create Tomato         | Passed |

| Get Tomato Details    | Passed |

| Update Rice           | Passed |

| Verify Updated Rice   | Passed |

| Delete Tomato         | Passed |

| Verify Tomato Removed | Passed |



Four crop records were created and tested during the integration process:



\* Rice

\* Wheat

\* Maize

\* Tomato



The Rice update operation was verified by checking that the modified description was returned by the API and displayed in the React front-end.



The Tomato delete operation was verified by confirming that the crop was removed from the crop listing.



\---



\# Front-End Integration



The React front-end communicates with the Express back-end using the JavaScript \*\*Fetch API\*\*.



The integration flow is:





React Component

&#x20;      |

&#x20;      ↓

apiRequest()

&#x20;      |

&#x20;      ↓

HTTP REST API

&#x20;      |

&#x20;      ↓

Express Route

&#x20;      |

&#x20;      ↓

Controller

&#x20;      |

&#x20;      ↓

MongoDB Atlas

&#x20;      |

&#x20;      ↓

JSON Response

&#x20;      |

&#x20;      ↓

React State

&#x20;      |

&#x20;      ↓

Updated UI



The front-end uses the following local API base URL:

http://localhost:5000/api





\---



\# API Communication



The front-end contains a centralized API service.



Example:

const API\_BASE\_URL = "http://localhost:5000/api";



export const apiRequest = async (endpoint, options = {}) => {

&#x20; const response = await fetch(`${API\_BASE\_URL}${endpoint}`, {

&#x20;   headers: {

&#x20;     "Content-Type": "application/json",

&#x20;     ...options.headers,

&#x20;   },

&#x20;   ...options,

&#x20; });



&#x20; const data = await response.json();



&#x20; if (!response.ok) {

&#x20;   throw new Error(data.message || "Something went wrong");

&#x20; }



&#x20; return data;

};



export default API\_BASE\_URL;





This approach keeps API communication centralized and allows React components to reuse the same request handling logic.



\---



\# JWT Authentication Flow



The authentication process works as follows:

User Login

&#x20;   ↓

React Login Form

&#x20;   ↓

POST /api/auth/login

&#x20;   ↓

Express Authentication Controller

&#x20;   ↓

Password Verification

&#x20;   ↓

JWT Token Generated

&#x20;   ↓

Token Returned to React

&#x20;   ↓

Token Stored in localStorage

&#x20;   ↓

Authorization Header

&#x20;   ↓

Protected API





Protected requests use:





Authorization: Bearer <JWT\_TOKEN>





The JWT token is required for protected endpoints such as:





GET    /api/auth/profile

POST   /api/crops

PUT    /api/crops/:id

DELETE /api/crops/:id





\---



\# Security Measures



The back-end implements the following security measures:



\### 1. Password Hashing



Passwords are hashed using `bcryptjs` before being stored in the database.



\### 2. JWT Authentication



JWT tokens are used to authenticate users and protect restricted endpoints.



\### 3. Protected APIs



The following operations require authentication:



\* User profile access

\* Crop creation

\* Crop update

\* Crop deletion



\### 4. Environment Variables



Database credentials and JWT secrets are stored in `.env`.



Example:





MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_jwt\_secret





\### 5. Git Protection



The `.env` file is excluded from Git.



`node\_modules` is also excluded from Git.



\### 6. Mongoose Validation



Required crop fields are validated through the Mongoose schema.



\### 7. Unauthorized Request Handling



Requests without valid authentication tokens are rejected.



Example:



401 Unauthorized

Not authorized. Token required.





\### 8. CORS



CORS is configured to allow communication between the React front-end and Express back-end during local development.



\---



\# Error Handling



The API uses appropriate HTTP status codes for common errors.



| Status Code | Meaning                       |

| ----------- | ----------------------------- |

| 200         | Successful request            |

| 201         | Resource successfully created |

| 400         | Bad Request                   |

| 401         | Unauthorized                  |

| 404         | Resource Not Found            |

| 500         | Internal Server Error         |



\### Example Unauthorized Response





401 Unauthorized



Not authorized. Token required.





\### Example Not Found Response

404 Not Found







Crop not found.





Error messages are returned to the front-end so that appropriate error feedback can be displayed to the user.



\---



\# Week 4 Integration Validation



The complete front-end and back-end integration was validated using multiple testing methods.



\### Validation Methods



\* React UI testing

\* Postman API testing

\* MongoDB Atlas Data Explorer

\* Chrome Developer Tools

\* Browser Network tab

\* Authentication testing

\* JWT authorization testing

\* Crop CRUD testing

\* Error handling testing



\---



\## Integration Validation Results



| Integration Area            | Result |

| --------------------------- | ------ |

| User Registration           | Passed |

| User Login                  | Passed |

| JWT Authentication          | Passed |

| Protected Profile API       | Passed |

| Dynamic Crop Listing        | Passed |

| Dynamic Crop Details        | Passed |

| Crop Creation               | Passed |

| Crop Update                 | Passed |

| Crop Deletion               | Passed |

| Front-End API Communication | Passed |

| MongoDB Atlas Integration   | Passed |

| Error Handling              | Passed |



\---



\# Browser and Network Validation



The browser Network tab was used to verify communication between the React front-end and Express back-end.



The crop listing request was verified through:





GET /api/crops





The request successfully returned:



200 OK





This confirmed that the React front-end was successfully communicating with the Express API.



\---



\# Error Handling Validation



The integration was also tested when the back-end server was unavailable.



When the Express server was stopped and the React application attempted to fetch crop data, the front-end displayed:

Failed to fetch





After restarting the back-end server, the crop data was successfully loaded again.



This confirmed that the front-end handles API communication failures instead of silently failing.



\---



\# MongoDB Atlas Validation



MongoDB Atlas Data Explorer was used to verify that data submitted through the application was actually persisted in the database.



The registered user was verified in the MongoDB database.



Crop records created through the API were also stored and retrieved successfully.



This validated the complete data flow:





React Front-End

&#x20;     ↓

Express API

&#x20;     ↓

Mongoose

&#x20;     ↓

MongoDB Atlas

&#x20;     ↓

Express API

&#x20;     ↓

React Front-End





\---



\# Running the Back-End



\## 1. Clone the Repository





git clone https://github.com/Srushtimane181/agrimitra-backend.git





Move into the project directory:





cd agrimitra-backend



\## 2. Install Dependencies



Run:

npm install





\---



\## 3. Configure Environment Variables



Create a `.env` file in the backend root directory.



MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_jwt\_secret

PORT=5000





Do not commit the `.env` file to GitHub.



\---



\## 4. Start the Server



Run:

node server.js





The server normally runs at:





http://localhost:5000





A successful startup displays messages similar to:





Server running on http://localhost:5000

MongoDB connected successfully 🌱



\# Running the Complete AgriMitra Application



Both the front-end and back-end servers should be running for complete application functionality.



\## Back-End



From the backend directory:





node server.js





Backend:

http://localhost:5000





\## Front-End



From the frontend directory:

npm install

npm run dev





Frontend:

http://localhost:5173





The React application sends API requests to:

http://localhost:5000/api



\# Complete Integration Flow



The final application follows this flow:





User

&#x20;↓

React Front-End

&#x20;↓

Fetch API

&#x20;↓

Express REST API

&#x20;↓

JWT Authentication Middleware

&#x20;↓

Controller

&#x20;↓

Mongoose

&#x20;↓

MongoDB Atlas

&#x20;↓

JSON Response

&#x20;↓

React State

&#x20;↓

Updated User Interface





This allows information created or updated in the database to be displayed dynamically in the front-end.





\# Development Validation



The back-end integration was validated from both the developer and user perspectives.



\### Developer Perspective



\* API endpoints tested using Postman

\* JWT authentication verified

\* Unauthorized access tested

\* MongoDB persistence verified

\* CRUD operations tested

\* HTTP status codes verified

\* Browser Network requests inspected

\* Error handling tested



\### User Perspective



\* Registration tested through React UI

\* Login tested through React UI

\* Authenticated dashboard/profile access tested

\* Dynamic crop listing verified

\* Dynamic crop details verified

\* Updated crop information displayed

\* Deleted crop removed from the UI

\* API failure message displayed when backend was unavailable







\# Week 4 Outcome



The AgriMitra back-end was successfully integrated with the React front-end.



The completed integration provides:



\* Authenticated REST API communication

\* MongoDB Atlas data persistence

\* User registration and login

\* JWT-based authentication

\* Protected API operations

\* Dynamic crop information

\* Complete crop CRUD functionality

\* API error handling

\* Front-end and back-end communication

\* Database-backed dynamic UI updates



The integration was validated using \*\*React UI testing, Postman, MongoDB Atlas Data Explorer, and Chrome Developer Tools\*\*.



The Week 4 implementation demonstrates a functional full-stack application in which the React front-end communicates with the Node.js/Express back-end and retrieves or modifies persistent data from MongoDB Atlas.



## Week 5 – Testing, Debugging and Optimization

### Testing Strategy

The backend was tested using Jest and Supertest. Tests cover API availability, authentication validation, authorization, crop retrieval, invalid IDs, and protected crop operations.

### Automated Test Results

- Test Suites: 2/2 passed
- Tests: 10/10 passed
- Success Rate: 100%
- Latest Test Execution Time: 3.684 seconds

### Test Coverage

#### Authentication API
- API availability
- Registration validation
- Password length validation
- Protected profile endpoint authorization

#### Crop API
- Get all crops
- Invalid crop ID handling
- Non-existing crop handling
- Unauthorized crop creation
- Unauthorized crop update
- Unauthorized crop deletion

### Debugging

During testing, the initial crop API tests timed out because the test environment was not establishing a MongoDB connection before database-dependent tests.

This was resolved by creating `tests/setup.js`, which connects to MongoDB before the tests and disconnects after testing.

A database cleanup issue was also identified after adding protected crop tests. The cleanup process was corrected using `mongoose.disconnect()` to properly close the database connection.

### Performance

The backend test suite currently completes in 3.684 seconds with all 10 tests passing.

The application uses a separate Express application module (`app.js`) for testing, while `server.js` handles database connection and server startup. This separation makes the API easier to test without starting the HTTP server during automated tests.

### Code Quality

The backend follows a modular structure with separate routes, controllers/models, configuration, and test files. Automated tests and debugging documentation are included as part of the Week 5 deliverables.





