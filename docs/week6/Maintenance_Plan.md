# AgriMitra -- Maintenance Plan

## 1. Purpose

This maintenance plan defines how the deployed AgriMitra application
will be monitored, tested, secured, updated, and improved after
deployment.

The production system consists of:

-   React/Vite frontend hosted on Vercel
-   Node.js/Express backend hosted on Render
-   MongoDB Atlas database
-   GitHub repository for source-code management

## 2. Maintenance Objectives

The main objectives are:

1.  Keep the application available and functional.
2.  Detect and resolve errors quickly.
3.  Protect user accounts and sensitive configuration.
4.  Keep dependencies and libraries updated.
5.  Maintain database reliability and data quality.
6.  Verify important features after every major change.
7.  Keep deployment and project documentation updated.

## 3. Monitoring Strategy

### Frontend Monitoring

The deployed Vercel application should be checked for:

-   Page loading failures
-   Broken navigation
-   Registration/login issues
-   API request failures
-   UI rendering problems
-   Browser console errors

Useful checks include opening the production URL and using browser
Developer Tools → Network/Console when a problem occurs.

### Backend Monitoring

Render logs should be monitored for:

-   Server startup failures
-   API errors
-   Authentication failures
-   Database connection errors
-   Unexpected exceptions
-   Slow or failed requests

The Render service can be checked after deployment and whenever an API
problem is reported.

### Database Monitoring

MongoDB Atlas should be monitored for:

-   Database connectivity
-   Collection growth
-   Unexpected records
-   Failed queries
-   Storage/resource usage
-   Access and security configuration

## 4. Logging and Error Reporting

The backend already reports important startup information, including
server startup and MongoDB connection status.

Example production log evidence:

``` text
Server running on http://localhost:10000
MongoDB connected successfully
Your service is live
```

For future improvement, structured application logging can be added for:

-   Request method and endpoint
-   Response status code
-   Error message
-   Timestamp
-   Non-sensitive request context

**Important:** Passwords, JWT tokens, MongoDB credentials, and other
secrets must never be written to logs.

## 5. Backup and Data Protection

MongoDB Atlas should be used with an appropriate backup/recovery
strategy for the production requirements.

Recommended practices:

1.  Maintain regular database backups.
2.  Verify that backups can be restored.
3.  Restrict database access to required users/services.
4.  Never store database credentials in source code.
5.  Avoid deleting production data without verification.

For development/testing, temporary records such as `Test Rice` should be
removed after testing, as was done during deployment UAT.

## 6. Security Maintenance

Security checks should be performed regularly.

### Authentication

-   Use JWT authentication for protected endpoints.
-   Do not expose JWT secrets.
-   Generate a fresh token when an old token is invalid or expired.
-   Do not share authentication tokens in reports or screenshots.

### Password Security

Passwords must continue to be stored using bcrypt hashing rather than
plain text.

### Environment Variables

Sensitive values should remain in deployment environment variables:

``` text
MONGO_URI=<private value>
JWT_SECRET=<private value>
```

`.env` files must remain excluded from GitHub and submission ZIP files.

### Dependency Security

Run:

``` bash
npm audit
```

and review vulnerabilities after dependency changes.

Keep Node.js and npm dependencies reasonably up to date while checking
compatibility before production deployment.

## 7. Update Procedure

A safe update workflow is:

``` text
Identify Change
      ↓
Modify Code
      ↓
Test Locally
      ↓
Run Lint / Build / Tests
      ↓
Commit to Git
      ↓
Push to GitHub
      ↓
Deploy
      ↓
Check Deployment Logs
      ↓
Perform UAT
```

### Backend update checks

Before deployment:

``` bash
npm test
```

The Week 5 backend automated suite achieved:

-   2 test suites passed
-   10 tests passed
-   0 failed tests

### Frontend update checks

Before deployment:

``` bash
npm test
npm run lint
npm run build
```

The Week 5 frontend automated suite achieved:

-   5 test files passed
-   15 tests passed
-   0 failed tests
-   ESLint: 0 errors and 0 warnings

A production build should complete successfully before the change is
deployed.

## 8. Post-Deployment Verification

After every significant deployment:

1.  Open the public frontend.
2.  Verify the homepage.
3.  Test registration.
4.  Test login.
5.  Verify dashboard access.
6.  Open the Crops page.
7.  Open crop details.
8.  Check the deployed backend endpoint.
9.  Test important protected API operations.
10. Review deployment logs for errors.

For API changes, Postman can be used to verify expected HTTP status
codes and response data.

## 9. Incident Response

If a production problem occurs:

### Step 1 -- Identify

Determine whether the problem is related to:

-   Frontend
-   Backend
-   Database
-   Authentication
-   Deployment configuration
-   External service

### Step 2 -- Check Logs

Review Vercel or Render logs and browser console/network information.

### Step 3 -- Reproduce

Reproduce the problem using the same input and endpoint where possible.

### Step 4 -- Fix

Apply the smallest safe code/configuration change.

### Step 5 -- Test

Run automated tests and relevant manual/API tests.

### Step 6 -- Redeploy

Push the verified change through GitHub and allow the hosting platform
to deploy it.

### Step 7 -- Verify

Repeat the affected UAT scenario on the public deployment.

## 10. Rollback Strategy

If a new deployment introduces a serious issue:

1.  Stop further changes.
2.  Identify the last known working Git commit/deployment.
3.  Revert or redeploy the known working version.
4.  Verify the public application.
5.  Investigate the failed change separately.
6.  Redeploy only after the issue is fixed and tested.

Git history is maintained through the GitHub repository to support this
process.

## 11. Maintenance Schedule

  Activity                              Frequency
  ------------------------------------- -------------------------------
  Check production availability         Daily/when actively used
  Review deployment/backend logs        Weekly or after deployment
  Check database health                 Weekly
  Run automated tests                   Before every major deployment
  Run lint and production build         Before deployment
  Review npm dependencies/security      Monthly
  Review environment variables/access   Monthly
  Review backups/recovery               Monthly
  Review documentation                  After major changes

## 12. Future Maintenance Improvements

The following improvements can make maintenance more robust:

-   Add centralized error tracking such as Sentry.
-   Add structured logging with log levels.
-   Add automated CI/CD checks through GitHub Actions.
-   Add API rate limiting.
-   Add stronger CORS restrictions for production.
-   Add automated database backup verification.
-   Add monitoring/uptime alerts.
-   Add more negative and edge-case API tests.
-   Add automated end-to-end frontend tests.

## 13. Maintenance Conclusion

AgriMitra has a maintainable deployment structure because the frontend,
backend, and database are separated into appropriate services and the
source code is maintained through GitHub.

The maintenance process combines automated testing, linting,
production-build verification, deployment-log monitoring, database
monitoring, security practices, and post-deployment UAT. This provides a
practical procedure for keeping the application stable and improving it
safely over time.
